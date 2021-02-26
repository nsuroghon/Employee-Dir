import React, {Component} from "react";
import Form from "./components/form";
import Navigation from './components/navigation'
import Reset from './components/reset'
import Table from "./components/table";

// import Header from "./components/Header";
// import Section from "./components/Section";

class App extends Component {
  render(){
    return(
      <div><Navigation />
        <div>
          <Form /> <Reset />
        </div>
        <div>
          <Table />
        </div>

      </div>
    )
  }
}

export default App;
