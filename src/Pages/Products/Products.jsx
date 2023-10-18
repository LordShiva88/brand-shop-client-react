import { useLoaderData } from "react-router-dom";
import CardDetails from "../../Components/Banner/CardDetails/CardDetails";

const Products = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1>total data: {products.length}</h1>
      {
        products.map(product => <CardDetails product={product} key={product.id}></CardDetails>)
      }
    </div>
  );
};

export default Products;