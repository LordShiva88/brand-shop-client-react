import { useParams } from "react-router-dom";
import CardDetails from "../../Components/CardDetails/CardDetails";
import OfferPage from "../../Components/OfferPage/OfferPage";
import { useState } from "react";
import { useEffect } from "react";
import img from '../../assets/comming-removebg-preview.png'

const Products = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`https://shop-server-rjpbtgvy3-liton-naths-projects.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false)
      });
  }, [id]);


  return (
    <div className="md:p-0 p-3">
      <div className="bg-base-300">
        <OfferPage></OfferPage>
      </div>
      <div className="container mx-auto my-24">
        {loading ? <div className="flex justify-center"><span className=" loading loading-spinner text-accent"></span></div> : products.length !== 0 ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 ">
            {products?.map((product) => (
              <CardDetails product={product} key={product._id}></CardDetails>
            ))}
          </div>
        ) : (
          <div className="flex justify-center text-center">
            <div>
              <img src={img} alt="" />
              <p className="text-2xl font-semibold">
                Exciting New Products Coming Soon!
              </p>
              <p className="text-red-500">
                Stay tuned for the latest products from MI!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
