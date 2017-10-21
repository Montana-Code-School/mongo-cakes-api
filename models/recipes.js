const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  name: String,
  ingredients: Array,
  directions: String,
  image: String
});

module.exports = mongoose.model('recipe', RecipeSchema);
