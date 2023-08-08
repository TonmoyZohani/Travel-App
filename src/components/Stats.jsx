import React from "react";

const Stats = ({ items }) => {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }

  const packed = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((packed / items.length) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You have packed everything.Ready to go</em>
      ) : (
        <em>
          You have {items.length} items on your list, and you already packed{" "}
          {packed}({percentage}%)
        </em>
      )}
    </footer>
  );
};

export default Stats;
