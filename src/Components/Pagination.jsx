import React from 'react';
import ReactPaginate from "react-paginate";

const Pagination = ({setPage, page}) => {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=" >"
      onPageChange={e => setPage(e.selected + 1)}
      pageCount={3}
      previousLabel="< "
      renderOnZeroPageCount={null}
      forcePage={page - 1}
    />
  );
};

export default Pagination;