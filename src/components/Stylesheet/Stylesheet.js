import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Stylesheet.module.css';

const Stylesheet = () => (
  <div className={styles.Stylesheet} data-testid="Stylesheet">
    <h1 className="primary">Stylesheet</h1>
  </div>
);

//Stylesheet.propTypes = {};

Stylesheet.defaultProps = {};

export default Stylesheet;
