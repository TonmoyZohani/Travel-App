import React from "react";
import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Shirts", quantity: 6, packed: true },
];

const PackingList = ({ items, handleDeleteItem, handleToggle }) => {
  return (
    <div className="list">
      <div style={{ display: "flex", gap: "30px" }}>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default PackingList;
