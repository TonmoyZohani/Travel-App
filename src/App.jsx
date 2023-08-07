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

  const handleDeleteItem = (id) => {
    console.log(id);

    const filteredItems = items.filter((item) => item.id != id);
    console.log(filteredItems);

    setItems(filteredItems);
    console.log(items);
  };

  return (
    <>
      <Logo />
      <Form items={items} handleAddItems={handleAddItems} />
      <PackingList items={items} handleDeleteItem={handleDeleteItem} />
      <Stats />
    </>
  );
}

export default App;
