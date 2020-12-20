import React, {Component} from "react";
import Footer from "./components/footer/index.jsx";
import Main from "./components/main/index.jsx"
import "./styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Footer />
      </div>
    )
  }
}
