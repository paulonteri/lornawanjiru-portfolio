import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function App() {
  return (
    <div className="is-preload">
      <div id="wrapper" className="fade-in">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
