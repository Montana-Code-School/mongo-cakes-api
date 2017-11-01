console.log("LOADED!");
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home";
import Cake from "./components/cakes";
import Ingredients from "./components/ingredients"
import Recipes from "./components/recipes"
import {BrowserRouter,Route,Link,browserHistory,indexRoute} from "react-router-dom";


class Container extends React.Component {
  render(){
    return(
      <div>
        <nav className ="navbar navbar-fixed-top">
          <div className = "nav navbar-nav">
            <Link to = "/" >Home</Link>
            <Link to = "/ingredients">Ingredients</Link>
            <Link to = "/recipes">Recipes</Link>
          </div>
        </nav>
        <div className = "content">
          <Route path = "/" exact component = {Home}/>
          <Route path = "/ingredients" component = {Ingredients}/>
          <Route path = "/recipes" component = {Recipes}/>
        </div>
    </div>
    )
  }
}

// <Cake cakeName = 'Chocolate Cake' allergenName = 'nuts' imageLocation = './img/chocoloco.jpg' alt = 'a photo of a chocolate cake slice'/>
// <Cake cakeName = 'Vanilla Cake' allergenName = 'dairy' imageLocation = './img/chocoloco.jpg' alt = 'a photo of a chocolate cake slice'/>
ReactDOM.render(
  (<BrowserRouter>
  <Container />
  </BrowserRouter>),

  document.getElementById('root')
);
