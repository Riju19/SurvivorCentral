const mongoose = require("mongoose"); // requiring the mongoose package

const responseSchema = new mongoose.Schema({
  question: Number,
  answer: Number,
});

const userResponseSchema = new mongoose.Schema({
  responses: [responseSchema],
});

const responseModel = mongoose.model("Response", userResponseSchema);

module.exports = responseModel;
