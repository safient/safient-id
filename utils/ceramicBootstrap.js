const { writeFile } = require('fs').promises
const { randomBytes } = require('crypto')
const Ceramic = require('@ceramicnetwork/http-client').default
const { createDefinition, publishSchema } = require('@ceramicstudio/idx-tools')
const { Ed25519Provider } = require('key-did-provider-ed25519')

const fromString = require('uint8arrays/from-string')

const CERAMIC_URL = 'https://ceramic.signchain.xyz'

const VerificationSchema = {
    "type": "object",
    "title": "Verifications",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
         "twitter": {
                "type": "object",
                "title": "Twitter",
                "properties": {
                  "username":{
                    "type":"string",
                    "title":"username"
                  },
                  "status":{
                    "type":"boolean",
                    "title":"status"
                  }
                }
              },
            }
      }

async function run() {
  // The seed must be provided as an environment variable
  const seed = new Uint8Array(randomBytes(32))
  console.log("Created seed", seed)
  // Connect to the local Ceramic node
  const ceramic = new Ceramic(CERAMIC_URL)
  // Authenticate the Ceramic instance with the provider

  await ceramic.setDIDProvider(new Ed25519Provider(seed))

  // Publish the two schemas
  const [verfications] = await Promise.all([
    publishSchema(ceramic, { content: VerificationSchema })
  ])

  console.log("Profile Schema", verfications)

  // Create the definition using the created schema ID
  const verificationDefinition = await createDefinition(ceramic, {
    name: 'Verification',
    description: 'Verification Schema',
    schema: verfications.commitId.toUrl(),
  })
  // Write config to JSON file
  const config = {
    definitions: {
      profile: verificationDefinition.id.toString(),
    },
    schemas: {
      profile: verfications.commitId.toUrl(),
    },
  }
  await writeFile('./config.json', JSON.stringify(config))

  console.log('Config written to src/config.json file:', config)
  process.exit(0)
}

run().catch(console.error)