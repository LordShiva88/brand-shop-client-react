import { useParams } from "react-router-dom";
import CardDetails from "../../Components/CardDetails/CardDetails";
import OfferPage from "../../Components/OfferPage/OfferPage";
import { useState } from "react";
import { useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://shop-server-site-nw22c7qp6-liton-naths-projects.vercel.app/products/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [id]);

  return (
    <div className="md:p-0 p-3">
      <div className="bg-base-300">
        <OfferPage></OfferPage>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 my-20 container mx-auto">
        {products?.map((product) => (
          <CardDetails product={product} key={product._id}></CardDetails>
        ))}
      </div>
    </div>
  );
};

export default Products;
