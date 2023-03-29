import FoodItem from "./FoodItem";

function Foods(props) {
  if (props.items.length === 0) {
    return <h2>No foods available.</h2>;
  }

  return (
    <div>
      {props.items.map((foods) => (
        <FoodItem key={foods.id} name={foods.name} date={foods.date} />
      ))}
    </div>
  );
}

export default Foods;
