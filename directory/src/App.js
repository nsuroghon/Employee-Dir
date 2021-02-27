import React from "react";
import Form from "./components/Form/form";
import Navigation from './components/Navigation/navigation'
import Reset from './components/reset'
import TableHead from "./components/tableHeader";

class App extends React.Component {
  render(){
    return(
      <div>
        <Navigation />
        <Form /> <Reset />
        <TableHead />
      </div>
    )}}

export default App;
