import React from "react";

import classes from "./search.module.scss";
import Search from "~/public/shared/search.svg";
import TextInput from "~/src/shared/ui/inputs/text-input";

interface Props {
  className: string;
}

export default function HeaderBottomSearch({ className }: Props) {
  return (
    <section
      className={`padding-10 radius-12 bg-gray-container ${classes.container} ${className}`}
    >
      <TextInput
        RightIcon={Search}
        rightIconClick={() => {}}
        gap={6}
        name="search"
        title="Поиск товаров"
        placeholder="Поиск по сайту"
        classNameInput={`${classes.input} black text-16 second-family regular`}
      />
    </section>
  );
}
