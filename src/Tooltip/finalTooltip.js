import React, { useState, cloneElement, isValidElement } from "react";
import styles from "./Tooltip.module.css";

export default function TooltipBubble({ show = true, children, x, y }) {
  return (
    <div
      className={styles.container}
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`
      }}
    >
      <div className={`${styles.innerContainer} ${show ? styles.visible : ""}`}>
        {children}
        <div className={styles.triangle} />
      </div>
    </div>
  );
}

export function ComponentInjectionTooltip({ message, component: Component }) {
  return (
    <RenderPropTooltip message={message}>
      {(props) => <Component {...props} />}
    </RenderPropTooltip>
  );
}

// HOC
export function withTooltip(Component) {
  return function Wrapper({ message, ...props }) {
    return (
      <RenderPropTooltip message={message}>
        {(tooltipProps) => <Component {...tooltipProps} {...props} />}
      </RenderPropTooltip>
    );
  };
}

export function RenderPropTooltip({ message, children }) {
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
    <>
      {children({ onMouseEnter, onMouseLeave })}
      <TooltipBubble x={x} y={y} show={show}>
        {message}
      </TooltipBubble>
    </>
  );
}

export function CloneElementTooltip({ message, children }) {
  return (
    <RenderPropTooltip message={message}>
      {(props) => isValidElement(children) && cloneElement(children, props)}
    </RenderPropTooltip>
  );
}

export function Tooltip({ message, component: Component, children }) {
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
    <>
      {/* TODO:
        Render with the following priorities:
        1.- If a `component` prop was provided, render that component.
        2.- If `children` prop is a valid React element, clone it.
        3.- Use children as a render prop.
      */}
      <TooltipBubble x={x} y={y} show={show}>
        {message}
      </TooltipBubble>
    </>
  );
}
