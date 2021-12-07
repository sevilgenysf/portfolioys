import React from "react";
import Separator from "../../commen/separator/separator";
import SocialContact from "../../commen/social-contact/index";
import "./contact.css";

function contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">
        Contanct
      </label>
      <div className="contact-container">
        <div className="contact-left">
          <p>
            Benimle
            iletişime
            geçin
          </p>
          <SocialContact />
        </div>
        <div className="download">
          <a
            download
            href={
              require("../../../assets/profile.pdf")
                .default
            }
          >
            <i class="fi-rr-cloud-download download-icon"></i>
            Download
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default contact;
