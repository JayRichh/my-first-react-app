import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Greet.module.css';

export const Greet = (props) => (
  <div className={styles.Greet} data-testid="Greet">
    <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    {props.children}
  </div>
);

// Greet.propTypes = {};

Greet.defaultProps = {};

//export default Greet;
