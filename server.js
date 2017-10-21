const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const Recipe = require('./models/recipes');

mongoose.connect("mongodb://localhost:27017/cakes", {useMongoClient: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3200;
var router = express.Router();

router.use(function(req, res, next) {
  console.log("gettin' wild");
  next();
});

router.route("/recipes")
  .post(function(req, res) {
    var recipe = new Recipe();
    recipe.name = req.body.name;
    recipe.ingredients = ['flour', 'egg', 'sugar'];
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

router.route('/recipes/:recipe_id')
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
app.use('/api',router)

app.listen(port);
