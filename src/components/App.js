import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [mode, setMode] = useState(true)
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);
  
  function toggle() {
    setMode((mode) => !mode)
  }

  const appClass = mode ? "App light" : "App dark" 

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggle}>{mode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
