import { useState } from "react";

function FoodForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const foodData = {
      name: enteredName,
      date: new Date(enteredDate),
    };

    props.onSaveFoodData(foodData);
    setEnteredName("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div>
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}

export default FoodForm;

// import { useNavigate } from "react-router-dom";

// function FoodForm({ method, food }) {
//   const navigate = useNavigate();
//   function cancelHandler() {
//     navigate("..");
//   }

//   return (
//     <form>
//       <p>
//         <label htmlFor="name">Food Name</label>
//         <input id="name" type="text" name="name" required />
//       </p>
//       <p>
//         <label htmlFor="date">Date</label>
//         <input id="date" type="date" name="date" required />
//       </p>
//       <div>
//         <button type="button" onClick={cancelHandler}>
//           Cancel
//         </button>
//         <button>Save</button>
//       </div>
//     </form>
//   );
// }

// export default FoodForm;
