const { writeFile } = require('fs').promises
const { randomBytes } = require('crypto')
const Ceramic = require('@ceramicnetwork/http-client').default
const { createDefinition, publishSchema } = require('@ceramicstudio/idx-tools')
const { Ed25519Provider } = require('key-did-provider-ed25519')

const fromString = require('uint8arrays/from-string')

const CERAMIC_URL = 'https://ceramic.signchain.xyz'

const ProfileSchema = {
    "type": "object",
    "title": "Profile",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "name": {
        "type": "string",
        "title": "name",
        "maxLength": 150
      },
      "email": {
        "type": "string",
        "title": "email",
        "maxLength": 150
      },
      "description": {
        "type": "string",
        "title": "description",
      },
      "phoneNumber": {
        "type": "string",
        "title": "phoneNumber",
      },
      "location": {
        "type": "string",
        "title": "location",
      },
      "website": {
        "type": "string",
        "title": "website"
      },
      "birthdate": {
        "type": "string",
        "title": "birthdate",
      },
      "verifiables": {
        "type": "object",
        "title": "verifiables",
        "properties":{
          "github": {
            "type": "object",
            "title": "github",
            "properties":{
              "username": {
                "type": "string",
                "title": "username",
              },
              "githubVerified": {
                "type": "boolean",
                "title": "githubVerified",
              },
            }
          },
          "twitter": {
            "type": "object",
            "title": "twitter",
            "properties":{
              "username": {
                "type": "string",
                "title": "username",
              },
              "twitterVerified": {
                "type": "boolean",
                "title": "twitterVerified",
              },
            }
          }
        }
      },
      "experience": {
        "type": "array",
        "title": "experience"
      }
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
  const [profile] = await Promise.all([
    publishSchema(ceramic, { content: ProfileSchema })
  ])

  console.log("Profile Schema", profile)

  // Create the definition using the created schema ID
  const profileDefinition = await createDefinition(ceramic, {
    name: 'Profile',
    description: 'Profile Schema',
    schema: profile.commitId.toUrl(),
  })
  // Write config to JSON file
  const config = {
    definitions: {
      profile: profileDefinition.id.toString(),
    },
    schemas: {
      profile: profile.commitId.toUrl(),
    },
  }
  await writeFile('./config.json', JSON.stringify(config))

  console.log('Config written to src/config.json file:', config)
  process.exit(0)
}

run().catch(console.error)