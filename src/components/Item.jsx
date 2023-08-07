import React from "react";

const Item = ({ item, handleDeleteItem }) => {
  console.log(item.id);
  console.log(item.packed);
  return (
    <li>
      <span style={!item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
