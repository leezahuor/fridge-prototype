import { useState } from "react";

import FoodForm from "./FoodForm";

function NewFood(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveFoodDataHandler = (enteredFoodData) => {
    const foodData = {
      ...enteredFoodData,
      id: Math.random().toString(),
    };
    props.onAddFood(foodData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Food</button>
      )}
      {isEditing && (
        <FoodForm
          onSaveFoodData={saveFoodDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewFood;
