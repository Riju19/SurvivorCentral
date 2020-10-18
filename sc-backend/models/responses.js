const mongoose = require("mongoose"); // requiring the mongoose package

const responseSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const userResponseSchema = new mongoose.Schema({
  responses: [responseSchema],
  resources: [Number],
});

const responseModel = mongoose.model("Response", userResponseSchema);

module.exports = responseModel;
