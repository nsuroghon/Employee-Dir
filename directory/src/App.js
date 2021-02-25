import React, {Component} from "react";
import Form from "./components/form";
import Navigation from './components/navigation'
import Reset from './components/reset'

// import Header from "./components/Header";
// import Section from "./components/Section";

class App extends Component {
  render(){
    return(
      <div>
        <Navigation />
        <div className="container">
          <h1>My Blog</h1>
        </div>
        <div>
          <Form /> <Reset />
        </div>
      </div>
    )
  }
}

export default App;
