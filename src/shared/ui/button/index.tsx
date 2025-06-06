import React from "react";

import classes from "./button.module.scss";

export type ButtonTypeT = "ghost" | "yellow" | "white";
export type ButtonSizeT = "0";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  type: ButtonTypeT;
  size: ButtonSizeT;
  needActiveScale?: boolean;
  className?: string;
  justifyCenter?: boolean;
}

export default function Button({
  type,
  size,
  needActiveScale = true,
  onClick,
  className,
  justifyCenter = true,
  children,
  ...rest
}: Props) {
  const sizeRender = () => {
    return classes[`size-${size}`];
  };

  const typeRender = () => {
    return classes[type];
  };

  return (
    <button
      onClick={onClick}
      className={`${className} ${justifyCenter && "center-element"} ${classes.button} ${needActiveScale ? classes.activeScale : ""} ${sizeRender()} ${typeRender()}`}
      {...rest}
    >
      {children}
    </button>
  );
}
