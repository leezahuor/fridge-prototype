import FoodItem from "./FoodItem";

function Foods(props) {
  return (
    <div>
      {props.items.map((foods) => (
        <FoodItem name={foods.name} date={foods.date} />
      ))}
    </div>
  );
}

export default Foods;
