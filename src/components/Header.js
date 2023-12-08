import React from "react";
import { useSelector } from "react-redux";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const signOutHandler = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className=" flex justify-between items-center absolute left-0 top-0 right-0 px-2 py-2 bg-gradient-to-b from-black z-10">
      <img src="/images/netflix_logo.png" alt="logo" className="w-44 " />
      {user && (
        <button
          className="text-white px-4 py-2 bg-red-600 rounded-md"
          onClick={signOutHandler}
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
