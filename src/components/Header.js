import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/userSlice";
import { toggleShowGPTSearch } from "../redux/gptSlice";
import { SUPPORTED_LANG } from "../utils/langConstants";
import { changeLanguage } from "../redux/languageSlice";
const Header = () => {
  const [scroll, setScroll] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt?.showGPTSearch);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(100);
      } else {
        setScroll(0);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubcribe();
  }, []);
  const signOutHandler = async () => {
    await signOut(auth);
  };

  const showGPTSearchHandler = () => {
    dispatch(toggleShowGPTSearch());
  };

  const changeLanguageHandler = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div
      className={`flex justify-between items-center fixed left-0 top-0 right-0 px-2 py-2 bg-gradient-to-b from-black ${
        scroll === 100 ? "to-[rgba(0,0,0,0.8)]" : ""
      } z-10`}
    >
      <img src="/images/netflix_logo.png" alt="logo" className="w-44 " />
      {user && (
        <div>
          {showGPTSearch && (
            <select
              className="bg-gray-800 text-white px-4 py-2 mr-2 rounded-md"
              onChange={changeLanguageHandler}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="text-white px-4 py-2 bg-red-600 rounded-md mr-2"
            onClick={showGPTSearchHandler}
          >
            {showGPTSearch ? "Home" : "GPT Search"}
          </button>

          <button
            className="text-white px-4 py-2 bg-red-600 rounded-md"
            onClick={signOutHandler}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
