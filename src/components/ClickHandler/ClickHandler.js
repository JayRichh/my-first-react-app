import React from "react";
//import PropTypes from 'prop-types';
import styles from "./ClickHandler.module.css";

export const ClickHandler = () => {
  const clickHandler = (event, count = 1) => {
    console.log("Button Clicked", event, count);
  };
  return (
    <div className={styles.ClickHandler} data-testid="ClickHandler">
      <button onClick={clickHandler}>Click</button>
      <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
    </div>
  );
};

//ClickHandler.propTypes = {};

ClickHandler.defaultProps = {};

//export default ClickHandler;
