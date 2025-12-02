import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <div className="choose-us">
      <h2>Zašto izabrati nas?</h2>
      <div className="choose-us-container">
        <div className="choose-us-item">
          <b>Vrhunska oprema</b>
          <p>
            RTX grafike, 240Hz monitori i najnovije konzole za maksimalno
            uživanje u igranju.
          </p>
        </div>
        <div className="choose-us-item">
          <b>Takmičenja i događaji</b>
          <p>Redovni turniri sa nagradama i timskim izazovima za sve igrače.</p>
        </div>
        <div className="choose-us-item">
          <b>Prijatna atmosfera</b>
          <p>
            RGB osvetljenje, udobne gejming stolice i najbolja ekipa na jednom
            mestu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
