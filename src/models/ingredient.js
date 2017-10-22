const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var IngredientSchema = new Schema({
  name: String,
  allergens: Array,
  calories: Number
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
