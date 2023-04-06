import { NavLink } from "react-router-dom";

// #1 - LISTS FOOD STORAGES BUT CLICKING LEADS TO 404 //
// function FoodStorageList({ foodStorages }) {
//   return (
//     <div>
//       <h2>Your Food Storages</h2>
//       <ul>
//         <li>
//           <a href="fridge">
//             <div>
//               <h3>Fridge</h3>
//             </div>
//           </a>
//         </li>
//         <li>
//           <a href="freezer">
//             <div>
//               <h3>Freezer</h3>
//             </div>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// #3 - WORKS //
// lists food storages in correct place => clicking food storages links to correct pages
function FoodStorageNavigation() {
  return (
    <header>
      <div>
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
      </div>
    </header>
  );
}

export default FoodStorageNavigation;
