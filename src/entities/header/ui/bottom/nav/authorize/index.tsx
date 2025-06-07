import React from "react";

import classes from "./authorize.module.scss";
import Person from "~/public/shared/person-circle-fill.svg";
import Button from "~/src/shared/ui/button";

export default function HeaderBottomAuthorize() {
  return (
    <Button type="ghost" size="0" className={classes.container}>
      <section className="flex-row gap-6px align-center">
        <Person />
        <span className="text-16 gray-2 regular second-family">Войти</span>
      </section>
    </Button>
  );
}
