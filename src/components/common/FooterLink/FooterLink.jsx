import React from "react";
import "./FooterLink.scss";

 const FooterLink = (props) => {
  const { label, link } = props;
  return (
    <li className="footer-link">
      <a href={link}>{label}</a>
    </li>
  );
};
export default FooterLink;