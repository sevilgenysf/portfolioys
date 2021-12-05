import React from "react";
import "./about.css";
import SocialContact from '../../commen/social-contact/index';

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
            Merhaba Arkadaşlar, Ben; <br/> <span className="info-name"> Yusuf SEVİLGEN. </span> <br/>
            Web ile uğraşmayı seviyorum.
        </div>
        <div className="about-photo">
            <img 
              src={require("../../../assets/coding.png").default}
              className="picture" 
            />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
