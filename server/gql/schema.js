const { gql } = require("apollo-server");
const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    email:String
    siteweb:String
    description:String
    password:String
    avatar:String
    createAt:String
  }
  type Query { #querys
    getUser: User
  }
`;
module.exports = typeDefs;
