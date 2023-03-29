import { useState } from "react";

function FoodForm() {
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

    setEnteredName("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div>
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} />
        </div>
      </div>
      <div>
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}

export default FoodForm;
