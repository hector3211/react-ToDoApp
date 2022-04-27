import "./Form.css";
import { useState } from "react";
function Form() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItems() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  return (
    <div className="form-container">
      <div className="title">
        <h3>To-Do List</h3>
      </div>
      <input
        type="text"
        onChange={handleChange}
        className="input-one"
        value={inputText}
      ></input>
      <button className="btn" onClick={addItems}>
        Add
      </button>
      <div className="list-container">
        <ul className="list">
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Form;
