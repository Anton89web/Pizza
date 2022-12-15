import React from 'react';
import ReactPaginate from "react-paginate";

const Pagination = ({setPage}) => {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=" >"
      onPageChange={e => setPage(e.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="< "
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;