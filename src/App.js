import React, { useState } from "react";
import "./styles.css";
import Tooltip from "./Tooltip/Tooltip";
import Button from "./Button";

export default function App() {
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <Tooltip x={x} y={y} show={show}>
        Some message
      </Tooltip>
      <Button>Some button</Button>
    </div>
  );
}
