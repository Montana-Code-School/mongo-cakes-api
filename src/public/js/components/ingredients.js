import React from "react";
import Ingredient from "./ingredient";

class Ingredients extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      ingredients: []
    }
  }
  componentDidMount() {
    this.getIngredient()
  }

  getIngredient() {
    fetch("http://localhost:3200/api/ingredients")
      .then((result) => {
        return result.json();
      })
      .then((jsonResult) => {
        console.log(jsonResult);
        jsonResult.forEach((ingredient) => {

        })
      })
  }

  render() {
    return (
      <div className = "ingredients">
        <Ingredient ingredientName = "egg"/>
      </div>
    )
  }
}

export default Ingredients;
