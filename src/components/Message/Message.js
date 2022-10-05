import React from "react";
// import PropTypes from 'prop-types';
import styles from "./Message.module.css";
import { useState } from "react";

export const Message = () => {
  const [message, setMessage] = useState("Welcome Visitor");
  return (
    <div className={styles.Message} data-testid="Message">
      <h1>{message}</h1>
      <button onClick={() => setMessage("Thank you for subscribing")}>
        Subscribe
      </button>
    </div>
  );
};

Message.propTypes = {};

Message.defaultProps = {};

//export default Message;
