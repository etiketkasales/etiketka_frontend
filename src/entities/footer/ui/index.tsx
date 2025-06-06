import React from "react";

import classes from "./footer.module.scss";
import FooterTop from "./top";
import FooterBottom from "./bottom";

export default function Footer() {
  return (
    <footer>
      <section
        className={`wrapper black-container padding-32-24 flex-column gap-50 ${classes.container}`}
      >
        <FooterTop />
        <div className={classes.drag}></div>
        <FooterBottom />
      </section>
    </footer>
  );
}
