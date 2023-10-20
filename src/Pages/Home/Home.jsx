import { Link, useLoaderData } from "react-router-dom";
import Banner1 from "../../Components/Banner/Banner1";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Testimonial from "../../Components/Testimonial/Testimonial";
import img from "../../assets/banner-3.png";
import Features from "../../Components/Features/Features";

const Home = () => {
  const brands = useLoaderData();
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <Banner1></Banner1>

      <section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="space-y-2 text-center mb-10">
          <h2 className="text-3xl font-bold">
            Find Your
            <span className="text-[#eb347a]"> Brand</span>
          </h2>
          <p className="text-gray-500"> Find Your Signature Brand Today.</p>
          <div className="flex justify-center">
            <hr className="border w-32 h-1 bg-[#eb347a] "></hr>
          </div>
        </div>
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
          {brands.map((brand, ide) => (
            <Link
              to={`/products/${brand.name}`}
              key={ide}
              className="flex p-4 space-x-4 rounded-lg md:space-x-6 shadow-sm"
              data-aos="zoom-in"
            >
              <div className="flex justify-center p-2 rounded-lg sm:p-4 dark:bg-violet-400">
                <img src={brand.image} alt="" className="md:w-24 w-20" />
              </div>
              <div className="flex-col flex justify-center ">
                <p className="md:text-3xl text-2xl font-semibold">
                  {brand.name}
                </p>
                <p className="">{brand.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="space-y-2 text-center mb-10">
        <h2 className="text-3xl font-bold">
          Our
          <span className="text-[#eb347a]"> Features</span>
        </h2>
        <p className="text-gray-500">
          Empowering Your Journey: Discover Our Features, Transform Your
          Experience
        </p>
        <div className="flex justify-center">
          <hr className="border w-32 h-1 bg-[#eb347a] "></hr>
        </div>
      </div>
      <Features></Features>

      <div className="my-20">
        <img src={img} alt="" />
      </div>

      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
