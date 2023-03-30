// import { Link } from "react-router-dom";

import FoodStorageList from "../components/FoodStorageList";

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
      <FoodStorageList />
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
