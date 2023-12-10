import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addUpcomingMovies } from "../redux/moviesSlice";

const useGetUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlaying = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        options
      );

      const { results } = await response.json();
      dispatch(addUpcomingMovies(results));
    };

    getNowPlaying();
  }, []);
};

export default useGetUpcomingMovies;
