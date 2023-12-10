import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerID } from "../redux/moviesSlice";

const useGetMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovieTrailer = async () => {
      if (movieID) {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}/videos`,
          options
        );
        const { results } = await response.json();
        const officialTrailer = results.filter(
          (video) =>
            video.type === "Trailer" && video.name === "Official Trailer"
        );

        officialTrailer.length > 0
          ? dispatch(addTrailerID(officialTrailer[0]?.key))
          : dispatch(addTrailerID(results[0]?.key));
      }
    };
    getMovieTrailer();
  }, [movieID]);
};

export default useGetMovieTrailer;
