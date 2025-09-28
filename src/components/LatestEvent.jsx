import React from "react";

const LatestEvent = () => {
  return (
    <section className="section-card">
      <h2>Latest Event</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi
        laudantium eos atque sed debitis eum deleniti cumque saepe aut.
      </p>
      <div className="img-box">
        <img
          src="https://plus.unsplash.com/premium_photo-1709247069711-068d383b8497?q=80&w=1200&auto=format&fit=crop"
          alt="Kickball outing"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1661429511577-b165fc04718f?q=80&w=1200&auto=format&fit=crop"
          alt="Happy Hour"
        />
      </div>
    </section>
  );
};

export default LatestEvent;
