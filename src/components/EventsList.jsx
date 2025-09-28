import React from "react";

const EVENTS_DATA = [
  { date: "Feb 7",  title: "Employee Hack-a-ston" },
  { date: "Mar 7",  title: "Food Bank Volunteering" },
  { date: "Apr 4",  title: "Company Retreat" },
];

const EventsList = () => {
  const eventItems = EVENTS_DATA.map(({ date, title }, idx) => (
    <li key={idx}>
      <b>{date}:</b> {title}
    </li>
  ));

  return (
    <section className="section-card">
      <h3>Upcoming Events</h3>
      <ul>{eventItems}</ul>
    </section>
  );
};

export default EventsList;
