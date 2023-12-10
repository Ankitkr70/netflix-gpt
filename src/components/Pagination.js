import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPage } from "../redux/paginationSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector((store) => store.pagination?.totalPages);
  const pagination = new Array(totalPages).fill(null);
  const updateCurrentPage = (page) => {
    dispatch(changeCurrentPage(page));
  };
  console.log(pagination);
  console.log(totalPages);
  return (
    <div className="text-white flex gap-5">
      {pagination?.map((_, index) => {
        return (
          <span
            className="flex justify-center items-center w-[50px] h-[50px] bg-red-500 m-2 cursor-pointer font-bold rounded-full"
            onClick={() => updateCurrentPage(index + 1)}
          >
            {index + 1}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
