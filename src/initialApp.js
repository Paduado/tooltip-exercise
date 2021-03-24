import React, { useState } from "react";
import "./styles.css";
import Tooltip from "./Tooltip/initialTooltip";
import Button from "./Button";

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [show, setShow] = useState(false);

  function onMouseEnter(e) {
    const { x, y, width } = e.target.getBoundingClientRect();
    setY(y);
    setX(x + width / 2);
    setShow(true);
  }

  function onMouseLeave() {
    setShow(false);
  }
  return (
    <div className="App">
      <Tooltip x={x} y={y} show={show}>
        Some message
      </Tooltip>
      <Button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        Some button
      </Button>
    </div>
  );
}
