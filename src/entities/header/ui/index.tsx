import React from "react";
import HeaderTop from "./top";
import HeaderBottom from "./bottom";

export default function Header() {
  return (
    <header>
      <section className="flex-column wrapper-header">
        <HeaderTop />
        <HeaderBottom />
      </section>
    </header>
  );
}
