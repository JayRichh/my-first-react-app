import "./App.css";
// import "./appStyles.css";
// import styles from "./appStyles.module.css";

//import Button from "./components/Button/Button.js";
//import { Greet } from "./components/Greet/Greet.js";
//import { Message } from "./components/Message/Message";
//import { ClickHandler } from "./components/ClickHandler/ClickHandler";
//import ParentComponent from "./components/ParentComponent/ParentComponent";
//import UserGreeting from "./components/UserGreeting/UserGreeting";
//import NameList from "./components/NameList/NameList";
//import Stylesheet from "./components/Stylesheet/Stylesheet";
//import { Inline } from "./components/Inline";
//import Form from "./components/Form/Form";
//import { PostList } from "./components/PostList";
//import { PostForm } from "./components/PostForm";
import NAMES from "./components/data.json";
import { useState, useTransition } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const changeHandler = (event) => {
    setInputValue(event.target.value);
    startTransition(() => {
      setQuery(event.target.value)
    })
  };
  const filteredNames = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });
  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={changeHandler} />
      {isPending && <div>Loading...</div>}
      {/* <header className="App-header"> */}
      {/* <Greet name="Bruce" heroName="Batman" />
        <Greet name="Clark" heroName="Superman">
          <Button />
        </Greet>
        <Greet name="Diana" heroName="WoopWoop">
          <p>This is children props</p>
        </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <Button /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      {/* <Inline /> */}
      {/* <h1 className='error'>Errorrr</h1>
        <h1 className={styles.sucsess}>Sucsess</h1> */}
      {/* <Form /> */}
      {/* <PostList /> */}
      {/* <PostForm />
      </header> */}
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  );
}

export default App;
