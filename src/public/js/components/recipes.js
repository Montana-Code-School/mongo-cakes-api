import React from "react";
import Cake from './cakes';

class Recipes extends React.Component{
  render() {
    return (
      <div className = "recipes">
        <button><Cake cakeName = 'Chocolate Cakes' allergenName = 'dairy,gluten' imageLocation = './img/chocpourover.jpg' alt = '' onClick={this.myfuntion}/></button>
        <button><Cake cakeName = 'Vanilla Cakes' allergenName = 'dairy,gluten' imageLocation = './img/vanillacake.jpeg' alt = '' onClick={this.myfunction}/></button>
        <button><Cake cakeName = 'Gluten-Free Cakes' allergenName = 'dairy' imageLocation = './img/glutenfreecake.jpg' alt = '' onClick={this.myfunction}/></button>
        <button><Cake cakeName = 'Vegan Cakes' allergenName = 'gluten' imageLocation = './img/veganwhitecake.jpg' alt = '' onClick={this.myfunction}/></button>
      </div>
    )
  }
}

export default Recipes;
