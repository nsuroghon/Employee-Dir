import React from "react";

function Body (props) {
    return (
        <tbody>
        <tr>
            <td>
            {/* <img alt="" src="">Image</img> */}
            </td>
            <td>Name: {props.name}</td>
            <td>Phone</td>
            <td>Email</td>
            <td>D.O.B.</td>
        </tr>
        </tbody>
    )
}

export default Body;