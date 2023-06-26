const Book = require("../models/Book")
const Author = require("../models/Author")

const mongoDataMethods = {
    getAllBooks: async ()=>{
        return await Book.find()
    },
    createBook: async (args)=>{
        const newAuthor = new Author(args);
        return await newAuthor.save();
    },
    createAuthor: async (args)=>{
        const newAuthor = new Author(args);
        return await newAuthor.save();
    }

}
module.exports = mongoDataMethods