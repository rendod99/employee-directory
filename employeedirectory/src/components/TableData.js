import React from "react";
import "./style.css";

function TableData(props) {
  return (
    <table className="tableEmployee">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Phone</th>
          <th>E-Mail</th>
       </tr>
     </thead>
    
     <tbody>
        {props.results.map(result => (
          <tr className="table" key={result.login.uuid}>
            <td><img src={result.picture.medium} alt="profile img"/></td>
            <td>{result.name.first} {result.name.last}</td>
            <td>{result.cell}</td>
            <td className="email"><a href={result.email}>{result.email}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
    
  )

}

export default TableData