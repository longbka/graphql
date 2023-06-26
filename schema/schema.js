const { gql } = require("apollo-server-express");
// import { GraphQLObjectId } from "graphql-objectid-scalar";
const typeDefs = gql`
  scalar GraphQLObjectId
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }
  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }
  #ROOT TYPE
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }
  type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(name: String, genre: String, authorId: GraphQLObjectId): Book
  }
`;
module.exports = typeDefs;
