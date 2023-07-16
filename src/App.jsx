import { useState } from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import toast from "react-hot-toast";

function App() {
  return (
    <div>
      <Header title="Simple React App for Module 14 Assignment" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
