import React from "react";

class Cake extends React.Component{
  render() {
    return (
      <div className = "cake">
        <h3>Chocolate Cake</h3>
        <img src = "../../img/chocoloco.jpg"></img>
        <p><span>Allergens: </span>nuts, dairy</p>
      </div>
    )
  }
}

export default Cake;
