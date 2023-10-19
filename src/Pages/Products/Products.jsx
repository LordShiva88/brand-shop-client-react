import { useLoaderData } from "react-router-dom";
import CardDetails from "../../Components/CardDetails/CardDetails";
import OfferPage from "../../Components/OfferPage/OfferPage";


const Products = () => {
  const products = useLoaderData();
  return (
    <div className="md:p-0 p-3">
      <OfferPage></OfferPage>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 my-20">
        {products.map((product) => (
          <CardDetails product={product} key={product._id}></CardDetails>
        ))}
      </div>
    </div>
  );
};

export default Products;

