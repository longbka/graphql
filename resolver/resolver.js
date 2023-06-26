const { books, authors } = require("../data/static");
const Author = require("../models/Author");
const Book = require("../models/Book");
const resolvers = {
  Query: {
    books: (parent, args, { mongoDataMethods }) =>
      mongoDataMethods.getAllBooks(),
    book: (parent, args) =>
      books.find((book) => book.id.toString() === args.id),
    author: (parent, args) =>
      authors.find((author) => author.id.toString() === args.id),
    authors: () => authors,
  },
  Book: {
    author: (parent, args) => {
      return authors.find((author) => author.id.toString() === parent.authorId);
    },
  },
  Author: {
    books: (parent, args) => {
      return books.filter((book) => book.authorId.toString() === parent.id);
    },
  },
  Mutation: {
    createAuthor: async (parent, args,{mongoDataMethods}) => {
      await mongoDataMethods.createAuthor(args)
    },
    createBook: async (parent, args,{mongoDataMethods}) => {
      await mongoDataMethods.createBook(args)
    },
  },
};
module.exports = resolvers;
