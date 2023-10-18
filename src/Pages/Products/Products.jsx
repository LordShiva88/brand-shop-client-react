import { useLoaderData } from "react-router-dom";
import CardDetails from "../../Components/CardDetails/CardDetails";

const Products = () => {
  const products = useLoaderData();
  return (
    <div className="container mx-auto">
      <h1>total data: {products.length}</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <CardDetails product={product} key={product._id}></CardDetails>
        ))}
      </div>
    </div>
  );
};

export default Products;

