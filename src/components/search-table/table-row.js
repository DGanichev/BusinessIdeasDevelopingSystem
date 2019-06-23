import React from 'react';

const TableRow = ({data}) => (
    <tr>
        <th scope="row"><a href="#">{data.username}</a></th>
        <td>{data.projectName}</td>
        <td>{data.position}</td>
        <td><a href="#" className="btn btn-primary btn-block">Message</a></td>
    </tr>
);

export default TableRow;
