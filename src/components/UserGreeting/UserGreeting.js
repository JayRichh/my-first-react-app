import React from 'react';
//import PropTypes from 'prop-types';

//import styles from './UserGreeting.module.css';

const UserGreeting = () => {
  const isLoggedIn = false;
  return (
    <div>Welcome {isLoggedIn && "Jayden"}</div>
  );
}

//UserGreeting.propTypes = {};

UserGreeting.defaultProps = {};

export default UserGreeting;
