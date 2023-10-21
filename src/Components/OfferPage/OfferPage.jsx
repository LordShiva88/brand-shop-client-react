import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import offerBanner from "../../assets/watch-1.png";
import offerBanner1 from "../../assets/phone-1.png";
import offerBanner2 from "../../assets/offer-1.png";

const OfferPage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="">
      <Slider {...settings}>
        <div>
          <div className="flex flex-col sm:flex-col md:flex-row items-center md:justify-between justify-center py-10 lg:px-52 p-3">
            <div className="space-y-3 ">
              <p>🚀Exclusive Sale Offer - Limited Time Only!🚀</p>
              <p className="text-2xl">
                Sale Offer <span className="text-red-400">Black Friday</span>{" "}
                This Week
              </p>
              <h2 className="md:text-5xl text-3xl font-bold">
                Work Desk Surface Studio 2023
              </h2>
              <p>
                Starting at{" "}
                <span className="text-3xl font-bold text-red-400">$824.00</span>
              </p>

              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase px-4">
                Shop Now
              </button>
            </div>

            <div>
              <img src={offerBanner2} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col sm:flex-col md:flex-row items-center md:justify-around justify-center py-10 lg:px-20 p-3">
            <div className="space-y-3 ">
              <div className="space-y-2">
                <p>🚀Exclusive Sale Offer - Limited Time Only!🚀</p>
                <p className="text-2xl">
                  Sale Offer <span className="text-red-400">Black Friday</span>{" "}
                  This Week
                </p>
                <h2 className="md:text-5xl text-3xl font-bold">
                  Apple Watch Series 9
                </h2>
              </div>
              <div className="mt-10">
                <p>
                  Starting at{" "}
                  <span className="text-3xl font-bold text-red-400">
                    $524.00
                  </span>
                </p>

                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase px-4 mt-5">
                  Shop Now
                </button>
              </div>
            </div>

            <div>
              <img src={offerBanner} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col sm:flex-col md:flex-row items-center md:justify-between justify-center py-10 lg:px-52 p-3">
            <div className="space-y-3 ">
              <p>🚀Exclusive Sale Offer - Limited Time Only!🚀</p>
              <p className="text-2xl">
                Sale Offer <span className="text-red-400">-20% OFF</span> This
                Week
              </p>
              <h2 className="md:text-5xl text-3xl font-bold mb-5">
                Redmi Note 11 Pro+ 5G
              </h2>
              <div className="mt-5">
                <p>
                  Starting at{" "}
                  <span className="text-3xl font-bold text-red-400">
                    $599.00
                  </span>
                </p>

                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase px-4">
                  Shop Now
                </button>
              </div>
            </div>

            <div>
              <img src={offerBanner1} alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default OfferPage;
