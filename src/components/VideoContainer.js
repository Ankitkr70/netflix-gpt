import React from "react";
import VideoDescription from "./VideoDescription";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlaying);
  const randomMovie =
    nowPlayingMovies[Math.floor(Math.random() * nowPlayingMovies?.length)];

  return (
    <div className="relative">
      <VideoDescription movie={randomMovie} />
      <VideoBackground movieID={randomMovie?.id} />
    </div>
  );
};

export default VideoContainer;
