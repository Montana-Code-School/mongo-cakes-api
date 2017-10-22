const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Ingredient = mongoose.model('Ingredient');

var RecipeSchema = new Schema({
  name: String,
  ingredients: {type: mongoose.Schema.Types.ObjectId,ref: 'Ingredient'},
  directions: String,
  image: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);
