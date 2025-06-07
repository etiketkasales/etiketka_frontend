import React from "react";

import classes from "./top.module.scss";
import HeaderTopItem from "./item";
import { headerTopItems } from "../../model/header.const";

export default function HeaderTop() {
  return (
    <nav
      className={`flex-row space-between gap-6 padding-10-16 yellow-container ${classes.container}`}
    >
      <ul className="flex-row gap-8 align-center">
        {headerTopItems.slice(0, 2).map((item, index) => {
          return <HeaderTopItem {...item} key={`${item.link}-${index}`} />;
        })}
      </ul>
      <ul className="flex-row gap-8 align-center">
        {headerTopItems.slice(2, 4).map((item, index) => {
          return <HeaderTopItem {...item} key={`${item.link}-${index}`} />;
        })}
      </ul>
    </nav>
  );
}
