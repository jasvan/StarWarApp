const { gql } = require( "apollo-server" );

const typeDefs = gql`
  # datos de envio
  type User {
    id: ID
    name: String
    username: String
    email:String
    # only update
    siteweb:String
    description:String
    password:String
    avatar:String
    createAt:String
  }

  # mutation objet, datos de llegada
  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }


  type Query { #querys
    getUser: User
  }

  type Mutation{
    # user
    register(input: UserInput):User     
    
  }
`;
module.exports = typeDefs;
