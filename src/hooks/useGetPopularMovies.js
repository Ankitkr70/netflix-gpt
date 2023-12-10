import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../redux/moviesSlice";

const useGetPopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlaying = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        options
      );

      const { results } = await response.json();
      dispatch(addPopularMovies(results));
    };

    getNowPlaying();
  }, []);
};

export default useGetPopularMovies;
