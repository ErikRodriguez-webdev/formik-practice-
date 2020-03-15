import React from "react";
import ContactForm from "./components/ContactForm";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactForm />
      </header>
    </div>
  );
}

export default App;
