import React from "react";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const GPTMovieSuggestions = () => {
  const searchedMovies = useSelector((store) => store.movies?.searchedMovies);
  const totalPages = useSelector((store) => store.pagination?.totalPages);
  return (
    <div className="">
      <div className="flex gap-5 flex-wrap px-10 py-6 justify-center">
        {searchedMovies?.map((movie) => (
          <MovieCard key={movie.id} image={movie?.poster_path} />
        ))}
      </div>
      <div className="flex justify-center items-center py-10">
        {totalPages > 1 && <Pagination />}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
