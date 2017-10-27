console.log("LOADED!");
import React from "react";
import ReactDOM from "react-dom";
import Cake from "./components/cakes";
import Home from "./components/home";
import {BrowserRouter,Route,Link} from "react-router-dom";


class Container extends React.Component {
  render(){
    return(
      <div>
        <h1>Hello world!</h1>
        <nav>
          <ul>
            <li> <Link to = "/">Home</Link></li>
          </ul>
        </nav>
        <div className = "content">
          <Route path = "/" component = {Home}/>
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
