// const mongoose = require("mongoose");

// const uri = "mongodb+srv://SurvivorCentral:SurvivorCentral!@cluster0.bfofj.mongodb.net/sc?retryWrites=true&w=majority";
// mongoose.connect(uri, {
//   keepAlive: true, // keeping the connection alive
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .catch(err => console.log(err))
// mongoose.set("debug", true);
module.exports.Response = require("./responses"); // requiring the todo model that we just created in mongodb
