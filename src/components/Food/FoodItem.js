import { useSubmit } from "react-router-dom";

import FoodDate from "./FoodDate";

function FoodItem(props) {
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
        <FoodDate date={props.date} />
        <h2>{props.name}</h2>
      </div>
      <button onClick={deleteHandler}>Remove</button>
    </li>
  );
}

export default FoodItem;
