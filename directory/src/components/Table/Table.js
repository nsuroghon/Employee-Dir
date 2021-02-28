import React, { Container, useState, useEffect} from "react";
import API from '../../utils/api';
import TableHead from "../tableHeader";
// import TableBody from '../tableBody';
import './Table.css';

const styles = {
  sectionStyles: {
    background: "orange"
  }
};

function Table() {
    const [users, setUsers] = useState([]);
    const [searchedUser, setSearchedUser] = useState("");

    useEffect(() => {  
        (function loadResults() {
          API.getUsers()
           .then(res => {
               console.log(res);
               setUsers(res.data)
          }).catch(err => console.log(err));
        })()
      }, [])

//need 2 handle input change
// 1. Sort the table by 1 category
// 2. Sort users by 1 category

  return (
    <section style={styles.sectionStyles} className="section">
      
      <TableHead />

      <div className="container">

      </div>

    
    </section>
  );
}

export default Table;
