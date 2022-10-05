import React from "react";
// import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = () => (
  <div className={styles.Button} data-testid="Button">
    <button>Click Me</button>
  </div>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
