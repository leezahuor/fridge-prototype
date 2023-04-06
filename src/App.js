import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import FoodStoragePage from "./pages/FoodStorage";
import FridgePage from "./pages/Fridge";
import FreezerPage, { loader as freezerFoodsLoader } from "./pages/Freezer";
// import FoodDetailPage from "./pages/FoodDetail";
// import EditFoodPage from "./pages/EditFood";
import RootLayout from "./pages/Root";
import FoodStorageRootLayout from "./pages/FoodStorageRoot";

// #1 - WORKS //
// fridge and freezer pages are nested under FoodStorageRootLayout
// not in the right spot i want it in but works
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "foodstorages",
        element: <FoodStorageRootLayout />,
        children: [
          { index: true, element: <FoodStoragePage /> },
          { path: "fridge", element: <FridgePage /> },
          {
            path: "freezer",
            element: <FreezerPage />,
            loader: freezerFoodsLoader,
          },
          // { path: ":foodId", element: <FoodDetailPage /> },
          // { path: ":foodId/edit", element: <EditFoodPage /> },
        ],
      },
    ],
  },
]);

// #2 - ALSO WORKS //
// no 2nd nested layout
// renders everything where i want it
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { index: true, element: <HomePage /> },
//       {
//         path: "foodstorages",
//         element: <FoodStoragePage />,
//       },
//       {
//         path: "foodstorages/fridge",
//         element: <FridgePage />,
//       },
//       {
//         path: "foodstorages/freezer",
//         element: <FreezerPage />,
//         loader: freezerFoodsLoader,
//       },
//       { path: "foodstorages/fridge/:foodId", element: <FoodDetailPage /> },
//       { path: "foodstorages/freezer/:foodId", element: <FoodDetailPage /> },
//       { path: "foodstorages/fridge/:foodId/edit", element: <EditFoodPage /> },
//       { path: "foodstorages/freezer/:foodId/edit", element: <EditFoodPage /> },
//     ],
//   },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
