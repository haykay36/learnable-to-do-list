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
    console.log(items);
  }

  return (
    <div className="App">
      <h1>To-do List App</h1>
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={() => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}> {item.value}</li>
          )
        })}
        <li>mon</li>
        <li>tue</li>
        <li>wed</li>
      </ul>
    </div>
  );
}

export default App;
