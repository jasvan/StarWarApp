const { gql } = require("apollo-server");
const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: string
  }
  type Query { #querys
    getUser: User
  }
`;
module.exports = typeDefs;
