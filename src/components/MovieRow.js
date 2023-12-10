import React from "react";
import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies }) => {
  return (
    <div className="text-white pb-6">
      <h1 className="font-bold text-4xl mb-4 px-4">{title}</h1>
      <div className="flex gap-5 overflow-x-scroll overflow-y-hidden p-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        {movies?.map((movie) => {
          return <MovieCard image={movie?.poster_path} />;
        })}
      </div>
    </div>
  );
};

export default MovieRow;
