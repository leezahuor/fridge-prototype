function FoodStorageList({ foodStorages }) {
  return (
    <div>
      <h2>Your Food Storages</h2>
      <ul>
        {/* {foodStorages.map((foodStorage) => ( */}
        <li>
          <a href="f1">
            <div>
              <h3>Fridge</h3>
            </div>
          </a>
        </li>
        <li>
          <a href="f2">
            <div>
              <h3>Freezer</h3>
            </div>
          </a>
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
}

export default FoodStorageList;
