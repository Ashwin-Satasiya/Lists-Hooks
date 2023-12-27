import React from "react";

import "./List.css";

export default function List({ listItems }) {
  return (
    <div className="list-container">
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {listItems.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="list">
        {listItems.map((item, index) => (
          <li key={index}>
            {item.id} {item.name} {item.age} {item.city}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
