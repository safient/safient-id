const { writeFile } = require('fs').promises
const { randomBytes } = require('crypto')
const Ceramic = require('@ceramicnetwork/http-client').default
const { createDefinition, publishSchema } = require('@ceramicstudio/idx-tools')
const { Ed25519Provider } = require('key-did-provider-ed25519')

const fromString = require('uint8arrays/from-string')

const CERAMIC_URL = 'https://ceramic.signchain.xyz'

  const VerifiedProfilesSchema = {
    doctype: 'object',
    title: 'Encryption Key',
    $schema: 'http://json-schema.org/draft-07/schema#',
    properties: {
      verifications: {
        type: 'array',
        title: 'verified'
      }
    },
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
  const [verifiedProfile] = await Promise.all([
    publishSchema(ceramic, { content: VerifiedProfilesSchema }),
  ])

  console.log("Profile Schema", verifiedProfile)
 

  // Create the definition using the created schema ID
  const verifiedProfileDefinition = await createDefinition(ceramic, {
    name: 'Profile',
    description: 'Profile Schema',
    schema: verifiedProfile.commitId.toUrl(),
  })


  // Write config to JSON file
  const config = {
    definitions: {
      profile: verifiedProfileDefinition.id.toString()
    },
    schemas: {
      profile: verifiedProfile.commitId.toUrl(),
    },
  }
  await writeFile('./config.json', JSON.stringify(config))

  console.log('Config written to src/config.json file:', config)
  process.exit(0)
}

run().catch(console.error)