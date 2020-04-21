import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const styles = {
  tooltipContainer: {
    position: "relative",
    width: 250
  },
  tooltip: {
    border: "1px solid #a8a8a8",
    padding: 10,
    position: "absolute",
    top: -50,
    marginBottom: 20,
    background: "#a8a8a8"
  },
  arrowDown: {
    width: 0,
    height: 0,
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderTop: "10px solid #a8a8a8",
    position: "absolute",
    left: 0,
    bottom: -10
  },
  anchor: {
    cursor: "pointer"
  }
}

const Tooltip = ({ text }) => (
  <div style={styles.tooltip}>
    <div>{text}</div>
    <div style={styles.arrowDown}></div>
  </div>
)

const HoverTooltip = () => {
  const [toggle, useToggle] = useState(false);

  function toggleTooltip() {
    useToggle(!toggle);
  }

  return (
    <div style={styles.tooltipContainer}>
      {toggle && <Tooltip text="This is a tooltip" />}
      <div onMouseOver={toggleTooltip} onMouseLeave={toggleTooltip} style={styles.anchor}>Open Tooltip onMouseOver</div>
    </div>
  )
}

const ClickTooltip = () => {
  const [toggle, useToggle] = useState(false);

  function toggleTooltip() {
    useToggle(!toggle);
  }

  return (
    <OutsideClickHandler onOutsideClick={() => useToggle(false)}>
      <div style={styles.tooltipContainer}>
        {toggle && <Tooltip text="This is a tooltip" />}
        <div onClick={toggleTooltip} style={styles.anchor}>Open Tooltip onClick</div>
      </div>
    </OutsideClickHandler>
  )
}

export default ({ hover, click }) => {
  if (hover) return <HoverTooltip />;
  else if (click) return <ClickTooltip />;
  // Default to click tooltip
  else return <ClickTooltip />;
}