import React from "react";
import "./styles.css";
import { Tooltip } from "./Tooltip/Tooltip";
import Button from "./Button";

function ButtonWrapper(props) {
  return <Button {...props}>Component injection</Button>;
}

export default function App() {
  return (
    <div className="App">
      <Tooltip message="Component injection" component={ButtonWrapper} />
      <Tooltip message="Clone element">
        <Button>Clone element</Button>
      </Tooltip>
      <Tooltip message="Render prop">
        {(p) => <Button {...p}>Render prop</Button>}
      </Tooltip>
    </div>
  );
}
