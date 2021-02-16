import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../style/global/global.scss";

interface Props {
  children: React.ReactElement[];
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
