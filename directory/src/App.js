import React, {Component} from "react";
import Navigation from './components/navigation'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './components/navbar'
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
      </div>
    )
  }
}

export default App;
