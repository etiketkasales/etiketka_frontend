"use client";
import React from "react";
import Footer from "~/src/entities/footer/ui";
import Header from "~/src/entities/header/ui";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
