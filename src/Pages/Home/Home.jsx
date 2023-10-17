import { useLoaderData } from "react-router-dom";
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
          <div
            className="shadow-lg p-5 w-full flex-col justify-center"
            key={brand.id}
          >
            <div>
              <img className="w-24 flex justify-center" src={brand.image}></img>
            </div>
            <p className="">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
