import React from "react";
import './Table.css'
import API from '../../utils/api'
// // import API from '../../utils/api';
// // import TableHead from "../tableHeader";
// // import TableBody from '../tableBody';
// import './Table.css';

class Table extends React.Component {

    state = {
        result: [],
        search: ""
    }

    componentDidMount(){
        API.getUsers()
        .then((res) => {this.setState({ result: res.data.results })
        .catch(err => console.log(err));
        })
    }

    render() {
        return (
            <table>
                {/* Table Head */}
                <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
            </tr>
                 </thead>

                 {/* Table Body */}
                 <tbody>
            <tr>
                <td>
                {/* <img alt="" src="">Image</img> */}
                </td>
                <td>Name</td>
                <td>Phone</td>
                <td>Email</td>
                <td>D.O.B.</td>
            </tr>
                 </tbody>
            </table>
        )
    }
}

// class Table extends React.Component {
//     state = {
//         search: "",
//         users: [],
//         results: [],
//         error: ""
//       };

//     componentDidMount() { 
//         this.loadResults();
//     };


// }
//     function loadResults() {
//         API.getUsers()
//           .then(res => {
//               console.log(res);
//           }).catch(err => console.log(err));
//     };
// }

export default Table;
