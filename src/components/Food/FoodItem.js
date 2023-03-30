import { useSubmit } from "react-router-dom";

import FoodDate from "./FoodDate";

function FoodItem({ food }) {
  const submit = useSubmit();

  function deleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <li>
      <div>
        <FoodDate date={food.date} />
        <h2>{food.name}</h2>
      </div>
      <button onClick={deleteHandler}>Remove</button>
    </li>
  );
}

export default FoodItem;
