import React from "react";
import "./Footer.scss";
import { FOOTER_LINKS } from "./constants";
import { Footerlinkcomp } from "./Footerlinkcomp";
import FooterLink from "../../common/FooterLink";

const Footer = (link, label) => {
  return (
    <>
      <div className="footer">
        <div className="help">
          <h2>Help</h2>
          {FOOTER_LINKS.map((linkObj) => {
            const { label, link } = linkObj;
            return <FooterLink label={label} link={link} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Footer;
