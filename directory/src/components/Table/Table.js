import React, { Component } from "react";
import API from '../../utils/api';
// import TableHead from "../tableHeader";
// import TableBody from '../tableBody';
import './Table.css';

const styles = {
  sectionStyles: {
    background: "orange"
  }
};

class Table extends Component {
    state = {
        search: "",
        users: [],
        results: [],
      };

    componentDidMount() { 
        this.loadUsers();
    };

    loadUsers = () => {
        API.getUsers()
          .then((res) => this.setState({ results: res.data.results, }) )
          .catch((err) => console.log(err));
    };
}
//   return (
//     <section style={styles.sectionStyles} className="section">
      
//       <TableHead />

//       <div className="container">

//       </div>

    
//     </section>
//   );
// }

export default Table;
