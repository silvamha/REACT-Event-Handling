import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello There My Friend!");

  

  const handleClick = () => {
    console.log("I have been clicked!");
    setHeadingText("Submitted");
  };

  const btnHover = () => {
    if (onmouseover) {
      document.querySelector(button);
    }
  };
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor: "white" }} onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default App;
