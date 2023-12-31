import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid h-screen px-4 bg-white place-content-center max-h-96">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-9xl">404</h1>
          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>
          <p className="mt-4 text-gray-500">We can not find that page.</p>
          <Link
            to={"/"}
            href="#"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
