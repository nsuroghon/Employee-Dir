import React from "react";
import './nav.css';

class Navigation extends React.Component {
  render() {
    return(
      <nav className="title">
        <h1>Employee Directory</h1>
        <p>Use the search form to narrow directory results.</p>
      </nav>
    )
  }
}
  
export default Navigation;