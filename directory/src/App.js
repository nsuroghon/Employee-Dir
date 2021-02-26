import React, {Component} from "react";
import Form from "./components/form";
import Navigation from './components/navigation'
import Reset from './components/reset'
import TableHead from "./components/tableHeader";


class App extends Component {
  render(){
    return(
      <div><Navigation />
        <div>
          <Form /> <Reset />
        </div>
        <div>
          <TableHead />
        </div>
      </div>
    )
  }
}

export default App;
