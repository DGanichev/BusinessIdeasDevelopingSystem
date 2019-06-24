import React from 'react';

const TableRow = ({type = "profiles", data}) => (
    <tr>
        {type === "profiles" ? <th scope="row"><a href="/user/profile">{data.username}</a></th> : null}
        <td>{data.projectName}</td>
        <td>{data.position}</td>
        <td><a href="#" className="btn btn-primary btn-block">Message</a></td>
    </tr>
);

export default TableRow;
