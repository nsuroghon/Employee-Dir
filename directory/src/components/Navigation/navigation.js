import React from "react";
import './nav.css';

class Navigation extends React.Component {
  render() {
    return(
      <header>
        <h1 className="text-center">Employee Directory</h1>
          <p className="text-center">Use the Search Form to Narrow Directory Results</p>
    </header>
    )
  }
}
  
export default Navigation;