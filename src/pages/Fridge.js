// import { useEffect, useState } from "react";

// import AddFood from "../components/NewFood/AddFood";

// function FridgePage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [fetchedFoods, setFetchedFoods] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     async function fetchFoods() {
//       setIsLoading(true);
//       const response = await fetch(
//         "https://fridge-proto-default-rtdb.firebaseio.com/fridge"
//       );
//       if (!response.ok) {
//         setError("Fetching foods failed.");
//       } else {
//         const resData = await response.json();
//         setFetchedFoods(resData.fridge);
//       }
//       setIsLoading(false);
//     }

//     fetchFoods();
//   }, []);

//   return (
//     <>
//       <h1>Fridge</h1>
//       <AddFood />
//       {/* {!isLoading && fetchedFoods && <AddFood props={fetchedFoods} />} */}
//       <div style={{ textAlign: "center" }}>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//       </div>
//     </>
//   );
// }

// export default FridgePage;

// import { Link } from "react-router-dom";
// import AddFood from "../components/NewFood/AddFood";

// const DUMMY_FOODS = [
//   {
//     id: "f1",
//     name: "Apple",
//   },
//   {
//     id: "f2",
//     name: "Cake",
//   },
// ];

// function FridgePage() {
//   return (
//     <>
//       <h1>Fridge</h1>
//       <AddFood />
//       <ul>
//         {DUMMY_FOODS.map((food) => (
//           <li key={food.id}>
//             <Link to={food.id}>{food.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default FridgePage;

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
  const [foods, setFoods] = useState('');

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
