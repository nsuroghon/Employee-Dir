import React from "react";
import Wrapper from './components/Wrapper/wrapper';
import Form from "./components/form";
import Navigation from './components/navigation'
import Reset from './components/reset'
import TableHead from "./components/tableHeader";

class App extends React.Component {
  render(){
    return(
      <Wrapper>
        <Navigation />
        <Form /> <Reset />
        <TableHead />
      </Wrapper>
    )}}

export default App;
