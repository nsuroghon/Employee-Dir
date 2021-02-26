import React, {Component} from "react";
import Form from "./components/form";
import Navigation from './components/navigation'
import Reset from './components/reset'


class App extends Component {
  render(){
    return(
      <div><Navigation />
        <div>
          <Form /> <Reset />
        </div>

      </div>
    )
  }
}

export default App;
