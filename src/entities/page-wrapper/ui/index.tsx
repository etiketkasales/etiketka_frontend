"use client";
import React from "react";
import Header from "../../header/ui";
import Footer from "../../footer/ui";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
