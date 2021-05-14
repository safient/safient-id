const Twit = require('twit')
const { recoverPersonalSignature }= require('eth-sig-util')
const ethers = require('ethers')
const dotenv = require('dotenv');
dotenv.config()


/**
 * step 1: Get the username of the user - DONE
 * step 2.a: Tweet the signature behalf of the user 
 * step 2.b: For the username get the latest tweet of the user - DONE
 * step 3: Verify if the user is same or not - DONE
 * step 4: Write the response into a ceramic document with timestamp and user tweet id - DONE
 * 
 */

const reg = new RegExp('(?<=sig:).*')

const twitterClient = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    app_only_auth: true
  })


const getUserTweets = async (username) => {
    const params = {
        screen_name: username,
        tweet_mode: 'extended',
        exclude_replies: true,
        include_rts: false,
        count: 1
    }
    const res = await twitterClient.get('statuses/user_timeline', params)
    return res
}


const handlerVerify = async (account, username, idx) => {
    
    let response

    //step 1: user tweet
    const twitterResponse = await getUserTweets(`@${username}`)

    try{
        if (!twitterResponse.data || !twitterResponse.includes) {
            response =  {
                status: 400,
                statusText: 'Invalid tweet id',
            }
        }
        const tweetContent = twitterResponse.data[0].full_text
        const tweetID = twitterResponse.data[0].id_str
        const matchedText = tweetContent.match(reg)
        
        if (
            !twitterResponse.data ||
            !twitterResponse.includes ||
            !matchedText
        ) {
            response = {
                status: 400,
                statusText: 'Invalid tweet format',
            }
        }
    
        const data = {
            types: {
                EIP712Domain: [
                    { name: 'name', type: 'string' },
                    { name: 'version', type: 'string' },
                ],
                Permit: [{ name: 'username', type: 'string' }],
            },
            domain: {
                name: 'Sybil Verifier',
                version: '1',
            },
            primaryType: 'Permit',
            message: {
                username: username,
            },
        }
    
        const sig = matchedText[0].slice(0, 132)
    
        const signer = recoverPersonalSignature({
            data: JSON.stringify(data),
            sig,
        })
    
        const formattedSigner = ethers.utils.getAddress(signer)
    
        if (account !== formattedSigner) {
            response ={
                status: 400,
                statusText: 'Invalid account',
            }
        }
    
        response = {
            status: 200,
            tweetId: tweetID,
            statusText: 'Succesful verification',
        }
        
    }catch(err){
        response ={
            status: 400,
            statusText: 'Invalid account',
        }
    }
    
    return response
}

module.exports={
    handlerVerify
}