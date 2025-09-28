import React from "react";
import CoreValues from "./CoreValues.jsx";
import EventsList from "./EventsList.jsx";
import LatestEvent from "./LatestEvent.jsx";  // ← import it

const Main = () => {
  return (
    <main>
      <CoreValues bonusValue="teamwork" />
      <EventsList />
      <LatestEvent />
    </main>
  );
};

export default Main;
