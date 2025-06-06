import type { Metadata, Viewport } from "next";
import "./styles/global.scss";
import "./styles/fonts.scss";

export const metadata: Metadata = {
  title: "Этикетка",
  description: "Маркетплей самых разных товаров",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1.5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={``}>{children}</body>
    </html>
  );
}
