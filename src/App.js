import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import FoodStoragePage from "./pages/FoodStorage";
import FridgePage from "./pages/Fridge";
import FreezerPage from "./pages/Freezer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "foodstorage",
    element: <FoodStoragePage />,
  },
  {
    path: "foodstorage/fridge",
    element: <FridgePage />,
  },
  {
    path: "foodstorage/freezer",
    element: <FreezerPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
