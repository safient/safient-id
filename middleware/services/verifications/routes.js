const fs = require('fs')
const {handlerVerify} = require('./helpers')
const Ceramic = require('@ceramicnetwork/http-client').default
const { IDX } = require('@ceramicstudio/idx')
const { Ed25519Provider } = require('key-did-provider-ed25519')
const {definitions} = require('./utils/config.json')
const CERAMIC_URL = 'https://ceramic.signchain.xyz'

const ceramic = new Ceramic(CERAMIC_URL)

const seed = new Uint8Array([
    207,   6, 204,  82, 227, 12, 103, 233,
     69, 236,  32,  16, 223, 54, 206, 233,
    104,  22,  57, 204, 185,  8,  44, 215,
    227,   5,  37, 180,  11, 96, 144, 145
  ]);

  let profileList = []

  const addProfile = async (profile, idx) => {
    const newProfiles = [...profileList, profile];
    console.log(newProfiles)
    await idx.set(definitions.profile, {
        verifications: newProfiles
    })
  }

module.exports = (app) => {

    app.post('/verify', async (req, res) => {
        const username = req.body.username
        const address = req.body.address
        

        await ceramic.setDIDProvider(new Ed25519Provider(seed))
        idx = new IDX({ ceramic, aliases: definitions })

        const result = await handlerVerify(address, username, 'text')        
        
        const verifiedProfiles = await idx.get(definitions.profile, idx.id)
        if(verifiedProfiles === null){
            profileList = []
        }else{
            profileList = verifiedProfiles.verifications
        }
        console.log(verifiedProfiles)
        if(result.status === 200){
            profile = {
                username: username,
                did: req.body.did,
                tweetId: result.tweetId,
                timestamp: new Date(),
                verified: true
            }
            await addProfile(profile, idx);
            res.send(JSON.stringify({status: 200, msg: result}))
        }else{
            res.send(JSON.stringify({status: 400, msg: result}))
        }
    })

    app.get('/profiles', async(req, res) => {
        await ceramic.setDIDProvider(new Ed25519Provider(seed))
        idx = new IDX({ ceramic, aliases: definitions })
        
        const verifiedProfiles = await idx.get(definitions.profile, idx.id)
        if(verifiedProfiles === null){
            profileList = []
        }else{
            profileList = verifiedProfiles.verifications
        }

        res.send(JSON.stringify({status: 200, msg: profileList}))
    })

}