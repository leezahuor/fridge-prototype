// import { useSubmit } from "react-router-dom";

import FoodDate from "./FoodDate";

function FoodItem(props) {
  // const submit = useSubmit();

  // function deleteHandler() {
  //   const proceed = window.confirm("Are you sure?");

  //   if (proceed) {
  //     submit(null, { method: "delete" });
  //   }
  // }

  function removeItem() {}

  

  const removeHandler = () => {
    // props.onDelete(props.id);
  };

  return (
    <li>
      <div>
        <h2>{props.name}</h2>
        <FoodDate date={props.date} />
      </div>
      <button onClick={removeHandler}>Remove</button>
    </li>
  );
}

export default FoodItem;
