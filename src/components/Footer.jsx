import React from "react";

const Footer = ({ company }) => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} {company}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
