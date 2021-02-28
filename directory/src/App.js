import React from "react";
import Navigation from './components/Navigation/navigation'
import Form from "./components/Form/form";
// import TableHead from "./components/tableHeader";
// import TableBody from "./components/tableBody";
import Table from './components/Table/Table';

class App extends React.Component {
  render(){
    return(
      <div>
        <Navigation />
        <Form />
        <Table />
      </div>
    )}}

export default App;
