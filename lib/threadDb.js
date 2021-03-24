
const crypto = require('crypto')
const { Client, Where, ThreadID } = require('@textile/hub')
const io = require('socket.io-client');

export const solveChallenge = (identity) => {
    return new Promise((resolve, reject) => {

        const socket = io(process.env.NEXT_PUBLIC_MIDDLEWARE_URL);
        socket.on("connect", () => {
            const publicKey = identity.public.toString();

            // Send public key to server
            socket.emit('authInit', JSON.stringify({
                pubKey: publicKey,
                type: 'token'
            }));

            socket.on("authMsg", async (event) => {
                const data = JSON.parse(event)
                switch (data.type) {
                    case 'error': {
                        reject(data.value);
                        break;
                    }

                    //solve the challenge
                    case 'challenge': {
                        const buf = Buffer.from(data.value)
                        const signed = await identity.sign(buf)
                        socket.emit("challengeResp", signed);
                        break;
                    }

                    //get the token and store it
                    case 'token': {
                        resolve(data.value)
                        socket.disconnect();
                        break;
                    }
                }
            })
        });
    });
}

export const loginUserWithChallenge = async function(id){
    if (!id) {
        throw Error('No user ID found')
    }

    /** Use the identity to request a new API token when needed */
    const credentials = await solveChallenge(id);
    localStorage.setItem('payload',JSON.stringify(credentials))
    const client = await Client.withUserAuth(credentials.payload)
    console.log('Verified on Textile API!!')
    return client
}

export const getCredentials = async function(){
    const credentials = JSON.parse(localStorage.getItem('payload'))
    const threadDB = credentials.threadDbId
    const client = Client.withUserAuth(credentials.payload)
    const threadDb = Uint8Array.from(threadDB)
    return {client, threadDb}
}

export const checkEmailExists = async function(email){
    try{
        const {threadDb, client} = await getCredentials()
        const threadId = ThreadID.fromBytes(threadDb)
        const query = new Where('email').eq(email)
        const result = await client.find(threadId, 'RegisterUser', query)
        if (result.length===1){
            return {
                status: false,
                user: result[0]
            }
        }
        return {status:true}
    }catch (e){
        console.log("Error:",e)
        return {status: false}
    }
}

export const registerNewUser = async function(did, name, email, signUpMode){
    try {
        console.log("mode:",signUpMode)
        //generate aes key for the user
        const {threadDb, client} = await getCredentials()
        const threadId = ThreadID.fromBytes(threadDb)
        const data = {
            did:did,
            name: name,
            email: email,
            description: 'nan',
            phoneNumber: 0,
            location: 'nan',
            website: 'nan',
            birthdate: 'nan',
            verifiables: {
                github: {
                    username: 'nan',
                    githubVerified: false,
                },
                twitter: {
                    username: 'nan',
                    twitterVerified: false,
                }
            },
            experience: [{_id:"-1"}],
            signUpMode: signUpMode
        }

        const query = new Where('did').eq(did)
        const result = await client.find(threadId, 'RegisterUser', query)
        if (result.length<1){
            await client.create(threadId, 'RegisterUser', [data])
            localStorage.setItem("USER", JSON.stringify(data))
            return data
        }
        console.log("User already exists!!")
        return false
    }catch(err){
        console.log("err:",err)
        return false
    }
}

export const getLoginUser = async function(did){
    try {
        const {client, threadDb} = await getCredentials()
        const query = new Where('did').eq(did)
        const threadId = ThreadID.fromBytes(threadDb)
        const result = await client.find(threadId, 'RegisterUser', query)

        if (result.length<1){
            console.log("Please register user!")
            return null
        }
        return result[0]
    }catch (err) {
        console.log("err:",err)
        return null
    }
}

export const getAllUsers = async function(did){
    try {
        const {threadDb, client} = await getCredentials()
        const threadId = ThreadID.fromBytes(threadDb)
        const registeredUsers = await client.find(threadId, 'RegisterUser', {})
        let caller
        let userArray = []
        console.log("Registered users:", registeredUsers)

        for (let i=0;i<registeredUsers.length;i++){
            const result = registeredUsers[i]
            const value = {
                name: result.name,
                email: result.email,
                did: result.did
            }
            if (did.toLowerCase() === result.did.toLowerCase()) {
                caller = value
            }
            else {
                userArray.push(value)
            }
        }

        return {
            userArray: userArray,
            caller: caller
        }
    }catch (e){
        console.log("err:",e)
        return null
    }
}

export const updateInfo = async function(name,email, description, phoneNumber, location, website, birthdate,
                                         github, twitter, employer, jobTitle ){
    const {threadDb, client} = await getCredentials()
    const threadId = ThreadID.fromBytes(threadDb)
    try{
        let query = new Where('email').eq(email)
        let user = await client.find(threadId, 'RegisterUser', query)

        const verifiables = {
            github: {
                username: github,
                githubVerified: false,
            },
            twitter: {
                username: twitter,
                twitterVerified: false,
            }
        }

        const workExperience = {
            employer: employer,
            jobTitle: jobTitle
        }

        user[0].name = name
        user[0].email = email
        user[0].description = description
        user[0].phoneNumber = phoneNumber
        user[0].location = location
        user[0].website = website
        user[0].birthdate = birthdate
        user[0].verifiables = verifiables
        if (user[0].experience.length ===1 && user[0].experience[0]._id === "-1"){
            user[0].experience = [workExperience]
        }else{
            user[0].experience.push(workExperience)
        }

        await client.save(threadId,'RegisterUser',[user[0]])
        console.log("updated!!")
        return true
    }catch (e) {
        console.log("Error:",e)
        return false
    }
}

export const updateGithubStatus = async function(email){
    const {threadDb, client} = await getCredentials()
    const threadId = ThreadID.fromBytes(threadDb)
    try{
        let query = new Where('email').eq(email)
        let user = await client.find(threadId, 'RegisterUser', query)

        user[0].verifiables.github.githubVerified = true

        await client.save(threadId,'RegisterUser',[user[0]])
        console.log("updated!!")
        return true
    }catch (e) {
        console.log("Error:",e)
        return false
    }
}

export const updateTwitterStatus = async function(email){
    const {threadDb, client} = await getCredentials()
    const threadId = ThreadID.fromBytes(threadDb)
    try{
        let query = new Where('email').eq(email)
        let user = await client.find(threadId, 'RegisterUser', query)

        user[0].verifiables.twitter.twitterVerified = true

        await client.save(threadId,'RegisterUser',[user[0]])
        console.log("updated!!")
        return true
    }catch (e) {
        console.log("Error:",e)
        return false
    }
}

/*
export const generateCipherKey = function(){
    try {
        const seed = crypto.randomBytes(32).toString()
        return new Promise((resolve)=>{
            const cipherKey = crypto.createHash('sha256').update(seed).digest();
            resolve(cipherKey)
        })
    }catch (err) {
        console.error("Error while generating symmetric key:",err)
        return null
    }
}
*/

/*
export const encryptData = function(data,cipherKey){
    return new Promise((resolve)=>{
        let iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv('aes256', cipherKey, iv);
        const encryptedData= Buffer.concat([
            iv,
            cipher.update(data),
            cipher.final()
        ]);
        resolve(encryptedData)
    })
}
*/

/*
export const decryptData = async function(encryptedData,cipherKey){
    const iv = encryptedData.slice(0,16)
    encryptedData = encryptedData.slice(16)
    return new Promise((resolve)=>{
        const decipher = crypto.createDecipheriv("aes256",cipherKey,iv)
        const decryptedData = Buffer.concat([decipher.update(encryptedData), decipher.final()]);
        resolve(decryptedData)
    })
}
*/
