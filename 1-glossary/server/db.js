const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:27017/glossary', () => {
  console.log('connected to db');
});
// 2. Set up any schema and models needed by the app
const defSchema = new mongoose.Schema({
  word: {type: String, unique:true},
  definition: String
})

const definition = mongoose.model('Definition', defSchema);

// 3. Export the models
module.exports.definition = definition;

// 4. Import the models into any modules that need them
