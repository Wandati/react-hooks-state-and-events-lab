import React from "react";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "white" : "black";
  return (
    <button onClick={() => handleClick} style={{ background: color }}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default App;
