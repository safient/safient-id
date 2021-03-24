const UserRegistration = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'RegisterUser',
    type: 'object',
    properties: {
        _id: {type:'string'},
        did: {type:'string'},
        name: {type: 'string'},
        email: {type: 'string'},
        description: {type: 'string'},
        phoneNumber: {type: 'number'},
        location: {type: 'string'},
        website: {type: 'string'},
        birthdate: {type: 'string'},
        verifiables: {
            type: 'object',
            properties:{
                github: {
                    type: "object",
                    properties:{
                        username: {type: "string"},
                        githubVerified: {type: "boolean"},
                    }
                },
                twitter: {
                    type: "object",
                    properties:{
                        username: {type: "string"},
                        twitterVerified: {type: "boolean"},
                    }
                }
            }
        },
        experience: {type: "array"}
    },
}

module.exports = UserRegistration
