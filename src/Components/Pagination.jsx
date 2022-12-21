import React from 'react';
import ReactPaginate from "react-paginate";
import {setPageNumber} from "../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";

const Pagination = () => {
  const {pageNumber} = useSelector(state => state.filterSlice)
  const dispatch = useDispatch()

  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=" >"
      onPageChange={e => dispatch(setPageNumber(e.selected + 1))}
      pageCount={3}
      previousLabel="< "
      renderOnZeroPageCount={null}
      forcePage={pageNumber - 1}
    />
  );
};

export default Pagination;