import React, { useState } from "react";
import "./App.css";

function App() {
  //stateHook- useState
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  //helper function
  function addItem() {
    if (!newItem) {
      alert("Enter an Item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App-cont">
      <span className="App">
        <h1>To-do List App</h1>
        <input
          type="text"
          placeholder="Add an item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={() => addItem()}>Add</button>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                {" "}
                {item.value}{" "}
                <button
                  className="delete-btn"
                  onClick={() => deleteItem(item.id)}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </span>
    </div>
  );
}

export default App;
