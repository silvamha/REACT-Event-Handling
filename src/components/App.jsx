import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello There My Friend!");

  const handleClick = () => {
    console.log("I have been clicked!");
    setHeadingText("Submitted");
  };
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
