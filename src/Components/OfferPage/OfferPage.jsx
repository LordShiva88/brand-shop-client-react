import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import offerBanner from "../../assets/banner-3.png";
import offerBanner1 from "../../assets/phone-1.png";
import offerBanner2 from "../../assets/slideshow-.jpg";

const OfferPage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="">
      <Slider {...settings}>
        <div>
          <div>
            <p>🚀 Exclusive Sale Offer - Limited Time Only! 🚀</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </Slider>
    </section>
  );
};

export default OfferPage;
