import React from "react";

const CoreValues = ({ bonusValue }) => {
  return (
    <section className="section-card">
      <h2>Highlights</h2>
      <h3>Remember to live out our values</h3>
      <ol>
        <li>Relentless Learning and Growth</li>
        <li>Creative Problem Solving</li>
        <li>Curiosity-Driven Exploration</li>
        <li>{`Celebrate ${bonusValue} together`}</li>
      </ol>
    </section>
  );
};

export default CoreValues;
