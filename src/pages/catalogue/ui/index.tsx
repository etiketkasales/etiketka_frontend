"use client";
import React from "react";

import classes from "./catalogue.module.scss";
import PageWrapper from "~/src/entities/page-wrapper/ui";

export default function CataloguePage() {
  return (
    <PageWrapper>
      <div className={classes.catalogue}>Catalogue</div>
    </PageWrapper>
  );
}
