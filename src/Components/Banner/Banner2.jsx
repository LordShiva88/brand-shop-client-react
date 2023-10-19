import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
    <div className="bg-image2 w-full flex lg:flex-row flex-col lg:p-20   p-10 items-center gap-7">
      <div className="flex-1 space-y-5 text-center lg:text-left">
        <h2 className="md:text-5xl text-3xl font-bold text-black ">
          Feel the Beat, Live the Melody:{" "}
          <span className="text-[#eb347a]">Where Music Meets Soul</span>
        </h2>
        <p className="text-black font-medium">
          Step into a World Where Every Note Sings a Story, Every Chord Paints a
          Memory, and Every Beat Echoes Love and Unity. Discover the Magic of
          Music at Harmony Haven, Where Your Heart Finds Its Song.
        </p>
        <Link to={"/register"} className="btn bg-[#eb347a]">
          Register Now
        </Link>
      </div>


    </div>
  );
};

export default Banner2;
