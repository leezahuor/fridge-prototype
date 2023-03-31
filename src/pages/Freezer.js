import { useState } from "react";
import Foods from "../components/Food/Foods";
import NewFood from "../components/NewFood/NewFood";

const DUMMY_FOODS = [
  {
    id: "f1",
    name: "Corndog",
    date: new Date(2023, 4, 15),
  },
  {
    id: "f2",
    name: "Burgers",
    date: new Date(2023, 5, 15),
  },
  {
    id: "f3",
    name: "Pizza",
    date: new Date(2023, 6, 15),
  },
];

function FreezerPage() {
  const [foods, setFoods] = useState(DUMMY_FOODS);

  const addFoodHandler = (food) => {
    setFoods((prevFoods) => {
      return [food, ...prevFoods];
    });
  };

  return (
    <div>
      <h1>Freezer</h1>
      <NewFood onAddFood={addFoodHandler} />
      <Foods items={foods} />
    </div>
  );
}

export default FreezerPage;
