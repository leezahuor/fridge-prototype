import { useState } from "react";
import Foods from "../components/Food/Foods";
import NewFood from "../components/NewFood/NewFood";

const DUMMY_FOODS = [
  {
    id: "f1",
    name: "Apple",
    date: new Date(2023, 4, 15),
  },
  {
    id: "f2",
    name: "Banana",
    date: new Date(2023, 5, 15),
  },
  {
    id: "f3",
    name: "Cheese",
    date: new Date(2023, 6, 15),
  },
];

function FridgePage() {
  const [foods, setFoods] = useState(DUMMY_FOODS);

  const addFoodHandler = (food) => {
    setFoods((prevFoods) => {
      return [food, ...prevFoods];
    });
  };

  return (
    <div>
      <h1>Fridge</h1>
      <NewFood onAddFood={addFoodHandler} />
      <Foods items={foods} />
    </div>
  );
}

export default FridgePage;
