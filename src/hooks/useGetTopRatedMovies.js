import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTopRatedMovies } from "../redux/moviesSlice";
const useGetTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlaying = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        options
      );

      const { results } = await response.json();
      dispatch(addTopRatedMovies(results));
    };

    getNowPlaying();
  }, []);
};

export default useGetTopRatedMovies;
