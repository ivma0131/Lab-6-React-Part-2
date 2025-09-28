import React from "react";

const Header = ({ name }) => {
  return (
    <header>
      <h1>
        Welcome <span id="txt-red">{name}</span> to the Codecraft Labs Intranet
      </h1>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="emp_mgmt.html">Employee Management</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
