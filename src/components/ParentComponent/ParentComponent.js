import React from "react";
import ChildComnponent from "../ChildComnponent/ChildComnponent";
//import PropTypes from 'prop-types';
// eslint-disable-next-line
import styles from "./ParentComponent.module.css";

const ParentComponent = () => {
  const greetParent = (childName) => {
    alert(`Hello parent ${childName}`);
  };

  return <ChildComnponent greetHandler={greetParent} />
};

//ParentComponent.propTypes = {};

ParentComponent.defaultProps = {};

export default ParentComponent;
