import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello There My Friend!");
  const [isMouseOver, setMouseOver] = useState(false);

  const handleClick = () => {
    console.log("I have been clicked!");
    setHeadingText("Submitted");
  };

  const handleMouseOver = () => {
    setMouseOver(true);
    console.log("I'm roving over!!!!");
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
