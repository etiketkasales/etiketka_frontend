import React from "react";
import { useWindowSize } from "react-use";

import classes from "./bottom.module.scss";
import LogoSvg from "~/public/header/logo.svg";
import ImageContainer from "~/src/shared/ui/image-container";
import HeaderBottomSearch from "./search";
import HeaderBottomNav from "./nav";
import Button from "~/src/shared/ui/button";
import { useRouter } from "next/navigation";

export default function HeaderBottom() {
  const { push } = useRouter();
  const { width } = useWindowSize();

  return (
    <section
      className={`flex-row gap-10 align-center padding-24 white-container ${classes.container}`}
    >
      <Button
        type="ghost"
        size="0"
        onClick={() => push("/")}
        needActiveScale={false}
        className={classes.button}
      >
        {width <= 460 ? (
          <LogoSvg />
        ) : (
          <ImageContainer
            src="/header/logo.png"
            alt=""
            width={242}
            height={46}
            className={classes.logo}
            fixedSize
          />
        )}
      </Button>
      <HeaderBottomSearch className={classes.search} />
      <HeaderBottomNav className={classes.nav} />
    </section>
  );
}
