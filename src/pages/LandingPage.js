import React from "react";

import mobileBg from "../assets/starter-bg-mobile.jpg";
import desktopBg from "../assets/starter-bg-wide.jpg";

const LandingPage = () => {
  const Jumbotron = () => (
    <div className="h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
      <p className="text-white text-2xl uppercase text-center px-2 md:px-4 lg:text-3xl lg:font-semibold">
        Welcome to PureLynk
      </p>
      <p className="text-white text-xl">We have all of your CBD needs.</p>
      <div className="mt-12 flex flex-col items-center">
        <p className="text-2xl font-bold text-green-400">Call Us Anytime</p>
        <a href="tel:9413016483" className="text-white text-xl font-bold">
          (941)-301-6483
        </a>
      </div>
    </div>
  );
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div
        className="md:hidden w-full"
        style={{
          backgroundImage: `url(${mobileBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "40em",
        }}
      >
        <Jumbotron></Jumbotron>
      </div>
      <div
        className="hidden md:flex w-full bg-gray-400 bg-opacity-75"
        style={{
          backgroundImage: `url(${desktopBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="flex w-full h-full justify-between bg-black bg-opacity-25">
          <div className="h-full w-full flex flex-col justify-center items-center ">
            <p className="text-white text-2xl uppercase text-center px-2 md:px-4 lg:text-3xl lg:font-semibold">
              Welcome to PureLynk
            </p>
            <p className="text-white text-xl">We have all of your CBD needs.</p>
            <div className="mt-12 flex flex-col items-center">
              <p className="text-2xl font-bold text-green-400">
                Call Us Anytime
              </p>
              <a href="tel:9413016483" className="text-white text-xl font-bold">
                (941)-301-6483
              </a>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>

      <div className="flex flex-col w-full h-full px-4 py-12">
        <p className="font-bold text-5xl text-green-500 mb-8 text-center">
          Hello World
        </p>
        <p className="text-2xl w-full text-justified mb-12">
          This is a Web Development template. It utilizes these technologies for
          rapid web development.
        </p>
      </div>

      <div className=" flex flex-col items-center bg-gray-300 ">
        <ul className="flex flex-col items-center rounded-2xl p-4">
          <li className="flex items-center h-24 ">
            <p className="">
              <span className="text-2xl text-green-600">Webpack</span> to bundle
              all of our js, css, and images. It also provides us with a
              development server.
            </p>
          </li>
          <li className="flex items-center h-24 ">
            <p>
              <span className="text-2xl text-green-600">React</span> will allow
              us quickly and painlessly create reuseable UI components.
            </p>
          </li>
          <li className="flex items-center h-24 ">
            <p>
              <span className="text-2xl text-green-600">TailwindCSS</span> for
              super awesome custom css to make everything look exactly how you
              want
            </p>
          </li>
        </ul>
      </div>

      <div className="flex h-60 w-full"></div>
    </div>
  );
};

export default LandingPage;
