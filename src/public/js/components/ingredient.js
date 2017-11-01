import React from "react";

class Ingredient extends React.Component{
  render() {
    return (
      <div className = "ingredient">
        <h3>{this.props.ingredientName}</h3>
        </div>
    )
  }
}

export default Ingredient;
