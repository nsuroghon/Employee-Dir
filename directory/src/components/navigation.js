import React from "react";

const styles = {
  title: {
    textAlign: "center"
  }
}


class Navigation extends React.Component {
  render() {
    return(
      <nav class="navbar navbar-light bg-light">
        <span style={styles.title} class="navbar-brand mb-0 h1">Employee Directory</span>
        <p style={styles.title} >Use the search bar to narrow your results.</p>
      </nav>
    )
  }
}
  
export default Navigation;