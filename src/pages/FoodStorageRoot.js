import { Outlet } from "react-router-dom";

import FoodStorageNavigation from "../components/FoodStorageNavigation";

function FoodStorageRootLayout() {
  return (
    <>
      <FoodStorageNavigation />
      <Outlet />
    </>
  );
}

export default FoodStorageRootLayout;
