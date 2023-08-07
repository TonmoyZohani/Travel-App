import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    console.log(item);
    setItems((items) => [...items, item]);
    console.log(items);
  };

  return (
    <>
      <Logo />
      <Form items={items} handleAddItems={handleAddItems} />
      <PackingList />
      <Stats />
    </>
  );
}

export default App;
