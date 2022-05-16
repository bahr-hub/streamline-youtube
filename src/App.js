import React, { Component } from "react";
import "./App.css";
import AppComponent from "./components/AppComponent";
import YouTubeLikes from "./components/YouTubeLikes";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppComponent></AppComponent>
      </React.Fragment>
    );
  }
}

export default App;
