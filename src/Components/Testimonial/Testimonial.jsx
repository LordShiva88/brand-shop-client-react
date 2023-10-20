// Testimonial
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useState } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">
          <span className="text-[#eb347a]">Testimonial</span>
        </h2>
        <p className="text-gray-500">What Our Customer says</p>
        <div className="flex justify-center">
          <hr className="border w-52 h-1 bg-[#eb347a] "></hr>
        </div>
      </div>
      <div className="md:px-10 p-3 my-10">
        <Slider {...settings}>
          {testimonials.map((testimonial, ide) => (
            <div key={ide}>
              <div className="h-auto p-8 bg-white rounded-md border mr-2 dark:bg-gray-800 mt-10">
                <p className=" text-gray-500 dark:text-gray-400">
                  {testimonial.details}
                </p>

                <div className="flex flex-grow items-center mt-6 -mx-2">
                  <img
                    className="object-cover mx-2 rounded-full w-14 h-14"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />

                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                      {testimonial.author_name}
                    </h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.author_title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
