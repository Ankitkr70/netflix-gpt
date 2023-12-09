import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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
