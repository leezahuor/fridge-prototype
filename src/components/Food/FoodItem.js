// import { useSubmit } from "react-router-dom";

// import FoodDate from "./FoodDate";

// function FoodItem() {
//   // DNW //
//   const submit = useSubmit();

//   function deleteHandler() {
//     const proceed = window.confirm("Are you sure?");

//     if (proceed) {
//       submit(null, { method: "delete" });
//     }
//   }

//   // DNW //
//   // const removeHandler = () => {
//   //   props.onDelete(props.id);
//   // };

//   return (
//     <li>
//       <div>
//         <h2>{props.name}</h2>
//         <FoodDate date={props.date} />
//       </div>
//       {/* <Link to="fridge">Fridge</Link> */}
//       <button onClick={deleteHandler}>Remove</button>
//     </li>
//   );
// }

// export default FoodItem;

import FoodDate from "./FoodDate";

function FoodItem(props) {
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
