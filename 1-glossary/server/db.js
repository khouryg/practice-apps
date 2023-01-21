const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:27017/glossary', () => {
  console.log('connected to db');
});
// 2. Set up any schema and models needed by the app
const defSchema = new mongoose.Schema({
  word: String,
  definition: String
})

const definition = mongoose.model('Definition', defSchema);

const model = {
  save(word) {
    return definition.create(word)
  },

  delete(id) {
    return definition.findOneAndDelete(id)
  },

  update (id, def) {
    return definition.findOneAndUpdate({'_id':id}, {'definition': def})
  },

  getAll() {
    return definition.find();
  }

}


// 3. Export the models
module.exports.model = model;

// 4. Import the models into any modules that need them
