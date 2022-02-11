import React from "react";

export const Footerlinkcomp = (props) => {
  return (
    <>
      <div className="help">
        <h2>Help</h2>
        <ul>
          <li>
            <a href="">Payments</a>
          </li>
          <li>
            <a href="">Shipping</a>
          </li>
          <li>
            <a href="">Cancellation and Returns</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Report</a>
          </li>
          <li>
            <a href="">Infrgigement</a>
          </li>
        </ul>
      </div>
    </>
  );
};









// {FOOTER_LINKS.map((linkObj) => {
//     <li>
//       <a href={linkObj.link}>{linkObj.label}</a>
//     </li>
//   })}
