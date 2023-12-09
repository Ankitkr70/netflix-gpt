import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../redux/moviesSlice";
const useGetNowPlaying = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlaying = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        options
      );

      const { results } = await response.json();
      dispatch(addNowPlaying(results));
    };

    getNowPlaying();
  }, []);
};

export default useGetNowPlaying;
