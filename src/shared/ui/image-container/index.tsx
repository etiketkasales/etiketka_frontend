import React from "react";

import classes from "./image.module.scss";

interface Props {
  width: number;
  height: number;
  src: string;
  className?: string;
  imgClassName?: string;
  alt?: string;
  loading?: "lazy" | "eager";
  radius?: 24 | 16 | 20;
  fixedSize?: boolean;
}

export default function ImageContainer(props: Props) {
  const {
    width,
    height,
    src,
    className,
    imgClassName,
    alt,
    loading,
    radius,
    fixedSize,
    ...rest
  } = props;

  return (
    <div
      style={{
        maxWidth: !fixedSize ? `${width}px` : "",
        maxHeight: !fixedSize ? `${height}px` : "",
        borderRadius: radius,
        height: fixedSize ? `${height}px` : "auto",
        width: fixedSize ? `${width}px` : "auto",
      }}
      className={`${className} ${classes.container}`}
    >
      <img
        src={src}
        width={width}
        height={height}
        loading={loading}
        {...rest}
        alt={alt ?? "Logo"}
        className={imgClassName}
        decoding="async"
      />
    </div>
  );
}
