import { useEffect, useState } from "react";
import { options } from "../utils/constants";
import { addSearchedMovies } from "../redux/moviesSlice";
import { changeCurrentPage, updateTotalPages } from "../redux/paginationSlice";
import { useDispatch } from "react-redux";

const useGetMovieByName = (query, currentPage) => {
  console.log(currentPage);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${currentPage}`,
        options
      );

      const data = await response.json();
      dispatch(addSearchedMovies(data.results));
      dispatch(updateTotalPages(data.total_pages));
      setLoading(false);

      console.log(data);
    };

    query && fetchMovies();
  }, [query, currentPage]);

  return { loading };
};

export default useGetMovieByName;
