import React from "react";
import { useRouter } from "next/navigation";

import classes from "./item.module.scss";
import Button from "~/src/shared/ui/button";
import { FooterLinkListI } from "~/src/entities/footer/model/footer.interface";

interface Props extends FooterLinkListI {}

export default function FooterTopItem({ title, links }: Props) {
  const { push } = useRouter();
  return (
    <section className={`flex-column gap-5 flex-start ${classes.container}`}>
      <h6 className="text-16 bold uppercase white second-family">{title}</h6>
      <ul className="flex-column gap-3 flex-start">
        {links.map((item, index) => {
          return (
            <li key={`${item.link}-${index}`}>
              <Button
                type="ghost"
                size="0"
                onClick={() => {
                  if (item.link) push(item.link);
                }}
              >
                <span className="text-16 regular footer-gray second-family">
                  {item.title}
                </span>
              </Button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
