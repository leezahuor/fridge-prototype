import { NavLink } from "react-router-dom";

function FoodStorageNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/foodstorages/fridge"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Fridge
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/foodstorages/freezer"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Freezer
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default FoodStorageNavigation;
