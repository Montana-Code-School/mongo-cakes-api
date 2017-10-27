import React from "react";

class Cake extends React.Component{
  render() {
    return (
      <div className = "cake">
        <h3>{this.props.cakeName}</h3>
        <img src = {this.props.imageLocation}></img>
        <p>Allergens: <span>{this.props.allergenName}</span></p>
        </div>
    )
  }
}

export default Cake;
