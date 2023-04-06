function FoodList({ foods }) {
  console.log(foods);
  // const foodHelper = () => {
  //   for (const foodname in foods) {
  //     foods[foodname];
  //   }
  // };
  return (
    <div>
      <h1>All Foods</h1>
      <ul>
        {Object.values(foods).map(
          function (food) {
            return (
              <div>
                <h2>{food.name}</h2>
                <time>{food.date}</time>
              </div>
            );
          }
          // {console.log(food, food.name, food.date)}
          // <li key={food.id}>
          //   <a href="...">
          // food.name
          // <div>
          //   <h2>{food.name}</h2>
          //   <time>{food.date}</time>
          // </div>
          //   </a>
          // </li>
        )}
      </ul>
    </div>
  );
}

export default FoodList;
