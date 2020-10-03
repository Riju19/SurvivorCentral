const mongoose = require("mongoose"); // requiring the mongoose package

const 

const responseSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const userResponseSchema = new mongoose.Schema({
    userId: Number,
    responses:[responseSchema],
    resources:[Number]
})

const responseModel = mongoose.model("Response", responseSchema);

module.exports = responseModel;
