import React, { useState } from "react";
import { Link } from "react-router-dom";
import landingBanner from "../../assets/landingBanner.jpg";
import Logo from "../../assets/LogoWeb.png";
import BackButton from "../../components/BackButton";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [next, setNext] = useState(true);
  const toggleClass = " bg-primary-main transform translate-x-6";
  const unToggleClass = "bg-white";

  function toggleSwitch() {
    setToggle(!toggle);
  }

  console.log(toggle);
  console.log(next);
  const submit = () => {
    //dispatch(userLoginMain());
    // dispatch(userLoginMainFetch());
    setNext(true);
  };

  const NextSection = () => (
    <div className=" w-full py-12 px-4">
      <p className="text-xl font-bold w-full text-left">Security Question</p>
      <div className="py-4 ">
        <p className="text-primary-main font-semibold">
          Whats your favorite color?
        </p>
        <p>Lorem ipsum</p>
      </div>
      <div className="flex flex-row w-ful justify-center pt-8">
        <button className="bg-primary-main px-24 py-4 rounded-xl">
          Continue
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full">
      <div className="h-full flex flex-row">
        <div className=" h-full w-full bg-black pt-12 pb-24 flex flex-col items-center justify-center px-4">
          <div className="px-4 py-12 h-full">
            <img src={Logo} alt="logo" className="w-full h-24"></img>
          </div>
          <div className="w-3/5 h-5/6">
            {next ? (
              <>
                <button
                  className="text-primary-main"
                  onClick={() => setNext(false)}
                >
                  Back
                </button>
                <div
                  className="bg-white  h-5/6"
                  style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                >
                  <NextSection></NextSection>
                </div>
              </>
            ) : (
              <div
                className="bg-white  h-5/6"
                style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
              >
                <div className="flex flex-row h-10 items-center justify-between divide-x divide-gray-400">
                  <Link
                    to={"/"}
                    className="flex w-full h-full items-center justify-center border-b-8 z-10 border-primary-main border-r-1 shadow-lg"
                    style={{ borderTopLeftRadius: 10 }}
                  >
                    <p className=" text-xl">Login</p>
                  </Link>
                  <Link
                    to={"/register"}
                    className="w-full h-full flex items-center justify-center shadow-lg z-0 border-inActive"
                    style={{ borderBottomWidth: 1, borderColor: "gray" }}
                  >
                    <p className=" text-xl text-inActive">Signup</p>
                  </Link>
                </div>
                <div className=" px-10 py-8 rounded-b-xl">
                  <div className="mb-4 ">
                    <input
                      className="w-full py-2 px-2 border-b-2 border-inActive  leading-tight"
                      id="username"
                      type="text"
                      placeholder="UserId"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full py-2 px-2 border-b-2 border-inActive leading-tight"
                      id="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex items-center w-full justify-between pb-12">
                    <p className="text-inActive font-semibold">
                      Remember UserId
                    </p>
                    <div className="flex items-center justify-center">
                      <input type="checkbox" name="toggle" className="hidden" />
                      <label
                        className="relative w-11 h-7 flex select-none cursor-pointer"
                        htmlFor="toggle"
                      >
                        <span className="absolute h-full w-full bg-inActive rounded-full"></span>
                        <span
                          onClick={toggleSwitch}
                          className={
                            "flex border-inActive bg-white justify-center ease-in-out h-7 w-7 border-2 absolute z-10 rounded-full transition-transform duration-300" +
                            (toggle ? toggleClass : unToggleClass)
                          }
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center w-full py-4">
                  <button
                    className="bg-primary-main rounded-xl  text-white font-bold py-3 px-28 shadow-lg"
                    type="button"
                    onClick={submit}
                  >
                    Login
                  </button>
                  <div className="items-end w-full flex justify-end mt-2 pr-8">
                    <a className="flex align-baseline  text-sm " href="#">
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div
              className="h-20 bg-white w-full flex flex-row justify-around items-center text-primary-main "
              style={{
                borderTopWidth: 1,
                borderColor: "inActive",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <a
                target="_blank"
                href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
                rel="noopener noreferrer"
              >
                Contact us
              </a>
              <a
                target="_blank"
                href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
                rel="noopener noreferrer"
              >
                How Can we help?
              </a>
            </div>
          </div>
        </div>
        <div
          className="h-auto"
          style={{
            backgroundImage: `url(${landingBanner})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
