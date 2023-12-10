import React, { useState } from "react";
import Header from "./Header";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { EMAIL_PASS_INVALID } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowpassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const validateFormData = async (e) => {
    e.preventDefault();
    const error = {};
    let nameError = null;
    if (!isSignIn) {
      nameError = validateName(name);
      if (nameError) {
        error.nameError = nameError;
      }
    }

    const emailError = validateEmail(email);
    if (emailError) {
      error.emailError = emailError;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      error.passwordError = passwordError;
    }
    setError(error);

    if (nameError || emailError || passwordError) return;

    if (isSignIn) {
      //sign In user
      await signInUser(email, password);
    } else {
      //create a new user
      await createUser(email, password);
    }
  };

  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateUserProfile();
    } catch (error) {
      //error from firebase
    }
  };
  const signInUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      //error
      setError({
        ...error,
        firebaseError: EMAIL_PASS_INVALID,
      });
    }
  };

  const updateUserProfile = async () => {
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    const { uid, displayName, email } = auth.currentUser;
    dispatch(
      addUser({
        uid,
        displayName,
        email,
      })
    );
  };

  return (
    <div>
      <Header />
      <div className="fixed top-0 z-[-2] object-cover w-full  ">
        <img src="/images/background.jpg" alt="" className="w-full" />
      </div>
      <div className="fixed left-0 right-0 top-0 z-[-1] w-full h-full bg-black bg-opacity-[0.1]"></div>

      <div className="w-4/12 mx-auto bg-black px-20 py-16 mt-28 rounded-lg bg-opacity-[0.85]">
        <form className="text-white" onSubmit={validateFormData}>
          <div className="text-2xl font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </div>

          {!isSignIn && (
            <div>
              <div className="my-4">
                <input
                  className="w-full py-2 px-4 bg-gray-600 outline-none rounded-md"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {error?.nameError && (
                <p className="text-red-600 text-sm">{error.nameError}</p>
              )}
            </div>
          )}

          <div className="my-4">
            <input
              className="w-full py-2 px-4 bg-gray-600 outline-none rounded-md"
              type="text"
              placeholder="Email or Phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error?.emailError && (
            <p className="text-red-600 text-sm">{error.emailError}</p>
          )}
          <div className="my-4 flex justify-between relative">
            <input
              className="w-full py-2 px-4 pr-[40px] bg-gray-600 outline-none rounded-md"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-3 top-1/4 cursor-pointer"
              onClick={() => setShowpassword(!showPassword)}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaEye />}
            </span>
          </div>
          {error?.passwordError && (
            <p className="text-red-600 text-sm">{error.passwordError}</p>
          )}
          {error?.firebaseError && (
            <p className="text-red-600 text-sm">{error.firebaseError}</p>
          )}
          <div className="my-6 text-lg ">
            <input
              className="w-full bg-red-600 p-2 rounded-md cursor-pointer"
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
