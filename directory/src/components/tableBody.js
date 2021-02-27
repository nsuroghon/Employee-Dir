import React from 'react';

function TableBody(props) {
    return (
        <tr>
            <td>
                <img alt={props.name} src={props.picture}></img>
            </td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    );
};

export default TableBody;