import Header from "./Header";
import VideoContainer from "./VideoContainer";
import MoviesContainer from "./MoviesContainer";
import useGetNowPlaying from "../hooks/useGetNowPlaying";

const Browse = () => {
  useGetNowPlaying();
  return (
    <div>
      <Header />
      <VideoContainer />
      <MoviesContainer />
    </div>
  );
};

export default Browse;
