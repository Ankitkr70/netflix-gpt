import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import useGetMovieByName from "../hooks/useGetMovieByName";
import { useSelector } from "react-redux";
const GPTContainer = () => {
  const searchQuery = useSelector((store) => store.movies?.searchQuery);
  const currentPage = useSelector((store) => store.pagination?.currentPage);
  const { loading } = useGetMovieByName(searchQuery, currentPage);
  return (
    <>
      <GPTSearchBar loading={loading} />
      <GPTMovieSuggestions />
    </>
  );
};

export default GPTContainer;
