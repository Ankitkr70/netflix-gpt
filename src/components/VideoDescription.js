import React from "react";
import { FaPlay } from "react-icons/fa6";
import { SlInfo } from "react-icons/sl";

const VideoDescription = ({ movie }) => {
  const { title, overview } = movie || {};
  return (
    <div className="absolute w-full top-0 aspect-video text-white bg-gradient-to-r from-[rgba(0,0,0,0.8)] ">
      <div className="px-10 w-1/3 absolute bottom-[35%]">
        <h1 className="font-bold text-5xl mb-4">{title}</h1>
        <p className="mb-4 text-sm">{overview}</p>
        <div className="flex">
          <button className=" flex gap-2 items-center bg-white hover:opacity-70 text-black px-8 py-2 mr-4 rounded-md cursor-pointer font-bold">
            <FaPlay /> Play
          </button>
          <button className="flex gap-2 items-center bg-gray-500 hover:opacity-70 text-white px-4 py-2 rounded-md cursor-pointer font-bold">
            <SlInfo /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;
