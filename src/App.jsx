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

  const handleToggle = (id) => {
    const newItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            packed: !item.packed,
          }
        : item
    );

    setItems(newItems);
  };

  return (
    <>
      <Logo />
      <Form items={items} handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggle={handleToggle}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
