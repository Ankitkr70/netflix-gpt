import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="absolute top-0 z-[-2] object-cover h-full w-full">
        <img src="/images/background.jpg" alt="" className="h-full w-full" />
      </div>
      <div className="absolute left-0 right-0 bottom-0 top-0 z-[-1] w-full bg-black bg-opacity-[0.5]"></div>

      <div className="w-4/12 mx-auto bg-black px-20 py-16 mt-28 rounded-lg bg-opacity-[0.85]">
        <form className="text-white">
          <div className="text-2xl font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </div>

          {!isSignIn && (
            <div className="my-4">
              <input
                className="w-full py-2 px-4 bg-gray-600 outline-none rounded-md"
                type="text"
                placeholder="Full Name"
              />
            </div>
          )}
          <div className="my-4">
            <input
              className="w-full py-2 px-4 bg-gray-600 outline-none rounded-md"
              type="text"
              placeholder="Email or Phone number"
            />
          </div>
          <div className="my-4">
            <input
              className="w-full py-2 px-4 bg-gray-600 outline-none rounded-md"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="my-10 text-lg">
            <input
              className="w-full bg-red-600 p-2 rounded-md"
              type="submit"
              value={isSignIn ? "Sign In" : "Sign Up"}
            />
          </div>
        </form>
        <div className="text-white text-md cursor-pointer">
          <span onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? "New to Netflix? Sign up now" : "Click here to Sign In"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
