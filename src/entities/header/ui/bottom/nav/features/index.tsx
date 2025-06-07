import React from "react";

import classes from "./features.module.scss";
import HeartFill from "~/public/shared/heart-fill.svg";
import Cart2 from "~/public/shared/cart2-fill.svg";
import Button from "~/src/shared/ui/button";
import { HeaderBottomFeatureI } from "~/src/entities/header/model/header.interface";

export default function HeaderBottomFeatures() {
  const headerBottomFeatures: HeaderBottomFeatureI[] = [
    {
      Icon: HeartFill,
      value: 0,
      onClick: () => {},
    },
    {
      Icon: Cart2,
      value: 0,
      onClick: () => {},
    },
  ];
  return (
    <>
      {headerBottomFeatures.map((item, index) => {
        return (
          <Button key={index} type={"ghost"} size={"0"} onClick={item.onClick}>
            <div className="flex-row gap-6px align-center">
              <item.Icon />
              <div
                className={`${index === 0 ? "green-container" : "yellow-container"} radius-8 padding-2-4 ${classes.container}`}
              >
                <span
                  className={`${index === 0 ? "white" : "black"} nowrap-text text-16 semibold second-family text-center`}
                >
                  {item.value}
                </span>
              </div>
            </div>
          </Button>
        );
      })}
    </>
  );
}
