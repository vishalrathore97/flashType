import React, { Component } from "react";
import Navbar from "./../Navbar/Navbar";
import Landing from './../Landing/Landing';
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <Navbar />
        <Landing/>
        <ChallengeSection/>
        {/*footer */}
      </div>
    );
  }
}

export default App;
