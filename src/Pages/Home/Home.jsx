import { Link, useLoaderData } from "react-router-dom";
import Banner1 from "../../Components/Banner/Banner1";
import Banner2 from "../../Components/Banner/Banner2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  const brands = useLoaderData();
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <div className="carousel lg:h-[800px] w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Banner1></Banner1>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Banner2></Banner2>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

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

      <div className="flex gap-5 container mx-auto" data-aos="fade-up"></div>
    </div>
  );
};

export default Home;
