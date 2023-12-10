import React from "react";
import { useSelector } from "react-redux";
import { LANG_CONFIG } from "../utils/langConstants";

const GPTSearchBar = () => {
  const currentLang = useSelector((store) => store.language?.currentLang);
  return (
    <div className="flex justify-center mt-[8%]">
      <div className="absolute top-0 z-[-2] object-cover w-full h-full ">
        <img src="/images/background.jpg" alt="" className="w-full h-full" />
      </div>
      <div className="absolute left-0 right-0 top-0 z-[-1] w-full h-full bg-black bg-opacity-[0.1]"></div>

      <div className="w-1/2 bg-black  py-4 px-2 rounded-md">
        <form className="w-full flex">
          <input
            type="text"
            placeholder={LANG_CONFIG[currentLang]?.placeholder}
            className="px-4 py-2 rounded-md mr-2 flex-grow"
          />
          <input
            type="submit"
            value={LANG_CONFIG[currentLang]?.search}
            className="text-white px-4 py-2 bg-red-600 rounded-md mr-2"
          />
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
