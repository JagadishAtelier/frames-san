import React from "react";
import Lottie from "lottie-react";
import animation404 from "../assets/404.json";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-full min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      
      <div className="max-w-md w-full">
        <Lottie
          animationData={animation404}
          loop
          className="w-full h-auto"
        />
      </div>

      <h1 className="text-4xl font-bold mt-6 text-gray-800">
        Page Not Found
      </h1>

      <p className="text-gray-500 mt-2">
        Sorry, the page you are looking for doesn’t exist or was moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-black px-6 py-3 text-white text-sm font-medium hover:bg-gray-900 transition"
      >
        Go Back Sel Hospitality Home
      </Link>
    </div>
  );
};

export default NotFound;
