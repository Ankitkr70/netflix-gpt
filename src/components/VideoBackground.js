import React from "react";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieID }) => {
  useGetMovieTrailer(movieID);
  const trailerID = useSelector((store) => store.movies?.trailerID);
  return (
    <div className="mt-[-8%]">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerID}?si=O5COL8TTjiCb22Xr&autoplay=1&mute=1&controls=0&showinfo=0&fs=1`}
        title="YouTube Player"
        allow="autoplay;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
