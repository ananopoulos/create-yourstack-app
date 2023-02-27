import React from "react";
import PropTypes from "prop-types";
import Footer from "../src/components/organisms/Footer/Footer";
import Header from "../src/components/organisms/Header/Header";
import { constants } from "../src/utils/constants.js";
import "./output.css";

export const metadata = {
  title: "Welcome!",
  description: "This is the home page",
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head />
      <body>
        <div className="flex flex-col h-screen justify-between">
          <Header />
          <main className="mb-auto">{children}</main>
          <Footer company={constants.companyName} />
        </div>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
