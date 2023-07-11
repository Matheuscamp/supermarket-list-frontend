import "./index.css";

export const ListCard = (props) => {
  console.log({ props });
  return (
    <div className="list-card-container">
      <span>{props.item.name}</span>
    </div>
  );
};
