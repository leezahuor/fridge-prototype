import { Outlet } from "react-router-dom";

import FoodStorageNavigation from "../components/FoodStorageNavigation";

function FoodStoragesRootLayout() {
  return (
    <>
      <FoodStorageNavigation />
      <Outlet />
    </>
  );
}

export default FoodStoragesRootLayout;
