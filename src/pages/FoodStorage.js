// import { Link } from "react-router-dom";

import FoodStorageNavigation from "../components/FoodStorageNavigation";

// const DUMMY_FOOD_STORAGES = [
//   {
//     id: "f1",
//     name: "Fridge",
//   },
//   {
//     id: "f2",
//     name: "Freezer",
//   },
// ];

function FoodStoragePage() {
  return (
    <>
      <h1>Food Storages</h1>
      <FoodStorageNavigation />
      {/* <ul>
        {DUMMY_FOOD_STORAGES.map((foodStorage) => (
          <li key={foodStorage.id}>
            <Link to={foodStorage.id}>{foodStorage.name}</Link>
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default FoodStoragePage;
