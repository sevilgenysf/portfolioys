import React from "react";
import "./social-contact.css";
import { SocialData } from "../../data/social";

function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item,i) => {
        return (
          <div key={i}>
          <a href={item.link}>
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" />
            </div>
          </a>
          </div>
        );
      })}
    </div>
  );
}

export default SocialContact;
