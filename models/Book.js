const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  authorId:{
    type: mongoose.Types.ObjectId
  }
});
module.exports = mongoose.model("books", Book);
