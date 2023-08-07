import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
    console.log(items);
  };

  const handleDeleteItem =(item)=>{
    
  }

  return (
    <>
      <Logo />
      <Form items={items} handleAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </>
  );
}

export default App;
