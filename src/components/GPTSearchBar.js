import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LANG_CONFIG } from "../utils/langConstants";
import { addSearchQuery } from "../redux/moviesSlice";
import { resetDefaultPage } from "../redux/paginationSlice";

const GPTSearchBar = ({ loading }) => {
  const searchInputRef = useRef(null);
  const dispatch = useDispatch();
  const currentLang = useSelector((store) => store.language?.currentLang);

  const getMovieRecommendations = async (e) => {
    e.preventDefault();
    dispatch(addSearchQuery(searchInputRef.current.value));
    dispatch(resetDefaultPage());
  };

  return (
    <div className="flex justify-center mt-[8%]">
      <div className="fixed top-0 z-[-2] object-cover w-full">
        <img src="/images/background.jpg" alt="" className="w-full h-full" />
      </div>
      <div className="fixed left-0 right-0 top-0 z-[-1] w-full h-full bg-black bg-opacity-[0.5]"></div>

      <div className="w-1/2 bg-black  py-4 px-2 rounded-md">
        <form className="w-full flex" onSubmit={getMovieRecommendations}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder={LANG_CONFIG[currentLang]?.placeholder}
            className="px-4 py-2 rounded-md mr-2 flex-grow"
          />
          <button
            disabled={loading}
            className="text-white px-4 py-2 bg-red-600 rounded-md mr-2"
            type="submit"
          >
            {LANG_CONFIG[currentLang]?.search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
