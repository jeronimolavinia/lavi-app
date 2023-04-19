
import React from "react";
import ButtonComponent from "./components/button-component";
import "bootstrap/dist/css/bootstrap.min.css";


export default class HomeView extends React.Component {
  handleClick() {
    console.log("Button clicked");
  }

  render() {
    return (
      <div>
        <ButtonComponent type="button" onClick={this.handleClick}>
        </ButtonComponent>
      </div>
    );
  }
}




