import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import banner from "../../assets/MainBanner.jpg";
import img from "../../assets/offer-2.png";
const Banner1 = () => {
  return (
    <div className="relative bg-cover bg-center flex items-center justify-center text-white overflow-hidden">
  <div className="container mx-auto space-y-5 text-center lg:text-left z-10 relative flex justify-center items-center pt-20 pb-10">
    <div>
      <h2 className="md:text-5xl text-3xl font-bold text-[#eb347a] leading-tight">
        Discover Iconic Excellence:{" "}
        <span className="text-black">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              2000,
              "Unveiling the Pinnacle of Brand Innovation!",
              3000,
              "Where Dreams Meet Innovation!",
            ]}
            repeat={Infinity}
          />
        </span>
      </h2>

      <p className="text-black font-medium">
        Immerse Yourself in a Symphony of Innovation, Where Every Pixel Tells a Tale,
        Every Click Chronicles Progress, and Every Product Embodies Excellence.
        Welcome to a World Where Technology and Elegance Converge.
      </p>
      <Link to={"/register"} className="btn bg-[#eb347a] hover:bg-[#ff6e96] py-2 px-6 rounded-full inline-block mt-4 transition duration-300">
        Register Now
      </Link>
    </div>
    <img src={img} alt="Product Showcase" className="hidden lg:block mt-8 mx-auto max-w-[400px] rounded-md shadow-lg" />
  </div>

  <img
    src={banner}
    className="absolute object-cover w-full h-full opacity-50"
    alt="Banner Background"
  />
</div>

  );
};

export default Banner1;
