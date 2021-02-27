import React from "react";
import Form from "./components/Form/form";
import Navigation from './components/Navigation/navigation'
import TableHead from "./components/tableHeader";

class App extends React.Component {
  render(){
    return(
      <div>
        <Navigation />
        <Form />
        <TableHead />
      </div>
    )}}

export default App;
