// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import FoodList from "../components/Food/FoodList";

function FreezerPage() {
  const foodStorage = useLoaderData();

  return <FoodList foods={foodStorage} />;
}

// export default FreezerPage;

export async function loader() {
  const response = await fetch(
    "https://fridge-proto-default-rtdb.firebaseio.com/freezer.json"
  );

  if (!response.ok) {
    //...
  } else {
    const resData = await response.json();
    return resData;
  }
}
export default FreezerPage;

// const [isLoading, setIsLoading] = useState(false);
// const [fetchedFoods, setFetchedFoods] = useState();
// const [error, setError] = useState();

// useEffect(() => {
//   async function fetchFoods() {
//     setIsLoading(true);
//     const response = await fetch(
//       "https://fridge-proto-default-rtdb.firebaseio.com/freezer.json"
//     );

//     if (!response.ok) {
//       setError("Fetching foods failed.");
//     } else {
//       const resData = await response.json();
//       setFetchedFoods(resData.foods);
//     }
//     setIsLoading(false);
//   }

//   fetchFoods();
// }, []);

// return (
//     <>
//       <div style={{ textAlign: "center" }}>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//       </div>
//       {!isLoading && fetchedFoods && <FoodList foods={fetchedFoods} />}
//     </>
//   );
// }

// export default FreezerPage;


// import { Link } from "react-router-dom";

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

// function FreezerPage() {
//   return (
//     <>
//       <h1>Freezer</h1>
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

// export default FreezerPage;


// import { useState } from "react";
// import Foods from "../components/Food/Foods";
// import NewFood from "../components/NewFood/NewFood";

// const DUMMY_FOODS = [
//   {
//     id: "f1",
//     name: "Corndog",
//     date: new Date(2023, 4, 15),
//   },
//   {
//     id: "f2",
//     name: "Burgers",
//     date: new Date(2023, 5, 15),
//   },
//   {
//     id: "f3",
//     name: "Pizza",
//     date: new Date(2023, 6, 15),
//   },
// ];

// function FreezerPage() {
//   const [foods, setFoods] = useState(DUMMY_FOODS);

//   const addFoodHandler = (food) => {
//     setFoods((prevFoods) => {
//       return [food, ...prevFoods];
//     });
//   };

//   return (
//     <div>
//       <h1>Freezer</h1>
//       <NewFood onAddFood={addFoodHandler} />
//       <Foods items={foods} />
//     </div>
//   );
// }

// export default FreezerPage;