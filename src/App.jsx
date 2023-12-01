import { useState } from "react";
import Header from "../components/Header";
import NamesList from "../components/NamesList";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NamesList />
    </div>
  );
}

export default App;
