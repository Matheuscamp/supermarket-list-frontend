import { useState } from "react";
import "./index.css";

export const ListCard = ({ item, onClick }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="list-card-container" onClick={() => onClick(item)}>
      <img
        className="checkbox"
        src={`/images/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
        alt="checked-item"
      />
      <div className="list-card-text-container">
        <span className="list-card-title">{item.name}</span>
        <span className="list-card-subtitle">{item.quantity}</span>
      </div>
      <img src="/images/arrow.svg" alt="arrow-icon" className="arrow-icon" />
    </div>
  );
};
