import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello to Trollo</h1>
      <div className="message">
        <b>About Trollo</b>
        <br />
        Trollo is a better Kanban board. It's kinda Trello clone, but don't tell
        anyone.
      </div>
      <p>Click on a button, see what happen!</p>
      <button onClick={() => alert("Nothing happens! :)")}>Click Here</button>
    </div>
  );
}
