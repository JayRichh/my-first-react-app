import React from "react";
//import PropTypes from 'prop-types';
//import styles from './NameList.module.css';

const NameList = () => {
  const names = ["Bruce", "Clark", "Diana", "Steve"];
  return (
    <div>
      {names.map((name) => {
        return <h2 key={name}>{name}</h2>;
      })}
    </div>
  );
};

//NameList.propTypes = {};

NameList.defaultProps = {};

export default NameList;
