import React from "react";
import { Header } from "./component/header/Header";
import { Menu } from "./component/menu/Menu";
import { Footer } from "./component/footer/Footer";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};
