import React from "react";
import { IMG_BASE_URL } from "../utils/constants";
const MovieCard = ({ image }) => {
  return image ? (
    <div className="w-[150px] rounded-lg overflow-hidden shrink-0 hover:scale-110 transition cursor-pointer border-[2px] border-white">
      <img src={IMG_BASE_URL + image} alt="" className="w-full" />
    </div>
  ) : (
    <></>
  );
};

export default MovieCard;
