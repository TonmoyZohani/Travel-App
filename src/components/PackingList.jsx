import React, { useState } from "react";
import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Shirts", quantity: 6, packed: true },
];

const PackingList = ({
  items,
  handleDeleteItem,
  handleToggle,
  handleClear,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items; // normally sorted
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description)); // it is sorted by string
  }

  if (sortBy === "status") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed)); // it is sorted by number
  }

  return (
    <div className="list">
      <div style={{ display: "flex", gap: "30px" }}>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleToggle={handleToggle}
          />
        ))}
      </div>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="status">Sort By Packed Status</option>
        </select>

        <button onClick={handleClear}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
