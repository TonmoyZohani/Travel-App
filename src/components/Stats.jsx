import React from "react";

const Stats = ({ items }) => {
  const packed = items.filter((item) => item.packed === true).length;

  const percentage = Math.round((packed / items.length) * 100);

  console.log(items);

  return (
    <footer className="stats">
      <em>
        You have {items.length} items on your list, and you already packed{" "}
        {packed}({percentage}%)
      </em>
    </footer>
  );
};

export default Stats;
