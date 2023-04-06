import { useParams } from "react-router-dom";

function FoodDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Food Details</h1>
      <p>Food ID: {params.foodId}</p>
    </>
  );
}

export default FoodDetailPage;
