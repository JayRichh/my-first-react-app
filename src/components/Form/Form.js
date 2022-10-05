import React from "react";
//import PropTypes from 'prop-types';
import styles from "./Form.module.css";
import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [comments, setComments] = useState("");
  const [topic, setTopic] = useState("react");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${username} ${comments} ${topic}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="comments">Comments</label>
      <textarea
        id="comments"
        value={comments}
        onChange={(event) => setComments(event.target.value)}
      />
      <label htmlFor="topic">Topic</label>
      <select
        id="topic"
        value={topic}
        onChange={(event) => setTopic(event.target.value)}
      >
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

//Form.propTypes = {};

Form.defaultProps = {};

export default Form;
