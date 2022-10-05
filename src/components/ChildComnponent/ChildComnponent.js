import React from "react";
//import PropTypes from 'prop-types';
import styles from "./ChildComnponent.module.css";

const ChildComnponent = (props) => {
  return (
    <div className={styles.ChildComnponent} data-testid="ChildComnponent">
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
};

//ChildComnponent.propTypes = {};

ChildComnponent.defaultProps = {};

export default ChildComnponent;
