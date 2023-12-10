import Header from "./Header";
import VideoContainer from "./VideoContainer";
import MoviesContainer from "./MoviesContainer";
import useGetNowPlaying from "../hooks/useGetNowPlaying";
import { useSelector } from "react-redux";
import GPTContainer from "./GPTContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../hooks/useGetTopRatedMovies";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt?.showGPTSearch);
  useGetNowPlaying();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();
  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPTContainer />
      ) : (
        <>
          <VideoContainer />
          <MoviesContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
