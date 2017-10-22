console.log("LOADED!");
import React from "react";
import ReactDOM from "react-dom";
import Cake from "./components/cakes";

class Container extends React.Component {
  render(){
    return(
      <div>
        <h1>Hello world!</h1>
        <Cake />
      </div>
    )
  }
}


ReactDOM.render(
  <Container />,
  document.getElementById('root')
);
