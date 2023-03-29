import FoodItem from "./FoodItem";

function Foods(props) {
  return (
    <div>
      <FoodItem name={props.items[0].name} date={props.items[0].date} />
      <FoodItem name={props.items[1].name} date={props.items[1].date} />
      <FoodItem name={props.items[2].name} date={props.items[2].date} />
      <FoodItem name={props.items[3].name} date={props.items[3].date} />
    </div>
  );
}

export default Foods;
