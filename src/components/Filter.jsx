import React from "react";
import "../styles/Filter.css";
function Filter({ onChange, types }) {
  return (
    <div className="filter-container">
      <form>
        <h2>Filter</h2>
        <ul className="filter-list">
          {types.map((item, index) => (
              <li key={index}>
                <label>{item}</label>
                <hr />
                <input type="checkbox" value={item} onChange={onChange} />
              </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Filter;
