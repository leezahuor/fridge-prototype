import FoodForm from "./FoodForm";

function NewFood(props) {
  const saveFoodDataHandler = (enteredFoodData) => {
    const foodData = {
      ...enteredFoodData,
      id: Math.random().toString(),
    };
    props.onAddFood(foodData);
  };

  return (
    <div>
      <FoodForm onSaveFoodData={saveFoodDataHandler} />
    </div>
  );
}

export default NewFood;
