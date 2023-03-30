import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import FoodStoragePage from "./pages/FoodStorage";
import FridgePage from "./pages/Fridge";
import FreezerPage from "./pages/Freezer";
import RootLayout from "./pages/Root";
// import FoodStoragesRootLayout from "./pages/FoodStoragesRoot";

// #1 - WORKS //
// fridge and freezer pages are nested under FoodStorageRootLayout
// not in the right spot i want it in but works
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { index: true, element: <HomePage /> },
//       {
//         path: "foodstorages",
//         element: <FoodStoragesRootLayout />,
//         children: [
//           { index: true, element: <FoodStoragePage /> },
//           {
//             path: "fridge",
//             element: <FridgePage />,
//           },
//           {
//             path: "freezer",
//             element: <FreezerPage />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// #2 - ALSO WORKS //
// no 2nd nested layout > pages routed directly
// renders everything where i want it 
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "foodstorages",
        element: <FoodStoragePage />,
      },
      {
        path: "foodstorages/fridge",
        element: <FridgePage />,
      },
      {
        path: "foodstorages/freezer",
        element: <FreezerPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
