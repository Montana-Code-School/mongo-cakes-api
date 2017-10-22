const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const Recipe = require('./models/recipe');
const Ingredient = require('./models/ingredient');

mongoose.connect("mongodb://localhost:27017/cakes", {useMongoClient: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3200;
var router = express.Router();

router.use(function(req, res, next) {
  console.log("gettin' wild");
  next();
});

router.route("/recipe")
  .post(function(req, res) {
    var recipe = new Recipe();
    recipe.name = req.body.name;
    recipe.ingredients;
    recipe.directions = "Put the darn thing togetha and put in the over";
    recipe.image = "invalid";

    recipe.save(function(err) {
      if(err)
        res.send(err);

      res.json({message : 'Recipe created'});
    });
  })
  .get(function(req,res){
    // res.json({message: "It's working!!!!!!!!!!!"})
    Recipe.find(function(err, recipes) {
      if(err)
        res.send(err);

      res.json(recipes);
    });
  });

router.route('/recipe/:recipe_id')
  .get(function(req, res) {
    Recipe.findById(req.params.recipe_id, function(err, recipe) {
      if(err)
        res.send(err);

      res.json(recipe);
    })
  })
  .put(function(req, res) {
    Recipe.findById(req.params.recipe_id, function(err, recipe) {
      if(err)
        res.send(err);

      recipe.name = "Happy";
      recipe.ingredients = [Math.random()];
      recipe.directions = "yummmmm";
      recipe.image = "invalid";

      recipe.save(function(err) {
        if (err)
          res.send(err);

        res.json({message:'recipe updated'})
      })
    })
  })
  .delete(function(req, res) {
    Recipe.remove({
      _id: req.params.recipe_id
    }, function(err, recipe) {
      if(err)
        res.send(err);

      res.json({message: 'successfully deleted'});
    });
  });

router.route('/ingredient')
  .post(function(req, res) {
    var ingredient = new Ingredient();

    ingredient.name = "Egg";
    ingredient.allergens = [Math.random() * 10];
    ingredient.calories = Math.random() * 1000;

    ingredient.save(function(err) {
      if(err)
        res.send(err);

      res.json({message: "Ingredient created!"});
    });
  })
  .get(function(req, res) {
    Ingredient.find(function(err, ingredients) {
      if (err)
        res.send(err);

      res.json(ingredients);
    });
  });

router.route('/ingredient/:ingredient_id')
  .get(function(req, res) {
    Ingredient.findById(req.params.ingredient_id, function(err, ingredient) {
      if(err)
        res.send(err);

      console.log(err)
      res.json(ingredient);
    });
  })
  .put(function(req, res) {
    Ingredient.findById(req.params.ingredient_id, function(err, ingredient) {
      if(err)
        res.send(err);

      ingredient.name = 'flour';
      ingredient.allergens = ['peanut', 'gluten'];
      ingredient.calories = Math.floor(Math.random() * 1000);

      ingredient.save(function(err) {
        if (err)
          res.send(err)

        res.json({ message: 'Ingredient Updated!'});
      });
    });
  })
  .delete(function(req, res) {
    Ingredient.remove({
      _id: req.params.ingredient_id
    }, function(err, ingredient) {
      if(err)
        res.send(err);

      res.json({message: 'successfully deleted'});
    })
  });
app.use('/api',router)

app.listen(port);
