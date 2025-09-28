import React from "react";
import "./App.css";
import "./Title.js";              
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import { myName } from "./Title.js";

export default function App() {
  return (
    <>
      <Header name={myName} />
      <hr />
      <Main />
      <Footer company="Codecraft Labs" />
    </>
  );
}
