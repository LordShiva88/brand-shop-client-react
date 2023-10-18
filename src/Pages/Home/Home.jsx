import { Link, useLoaderData } from "react-router-dom";
import Banner1 from "../../Components/Banner/Banner1";
import Banner2 from "../../Components/Banner/Banner2";

const Home = () => {
  const brands = useLoaderData();
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

      <div className="flex gap-5 container mx-auto">
        {brands.map((brand) => (
          <Link to={`/products/${brand.name}`} key={brand.id}>
            <div className="shadow-lg p-5flex-col justify-center w-full p-4">
              <div className="flex justify-center">
                <img className="h-20" src={brand.image}></img>
              </div>
              <p className="text-center text-2xl font-bold">{brand.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
