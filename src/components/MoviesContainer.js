import React from "react";
import { useSelector } from "react-redux";
import MovieRow from "./MovieRow";
const MoviesContainer = () => {
  const nowPlaying = useSelector((store) => store.movies?.nowPlaying);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  return (
    <div className="px-6 bg-black ">
      <div className="-mt-40 z-10 relative">
        <MovieRow title={"Now Playing"} movies={nowPlaying} />
        <MovieRow title={"Top Rated"} movies={topRatedMovies} />
        <MovieRow title={"Popular"} movies={popularMovies} />
        <MovieRow title={"Upcoming"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default MoviesContainer;
