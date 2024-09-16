import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="pagination-container">
      <button className="pagination-button" disabled={currentPage === 1}>
        &lsaquo;
      </button>
      <div className="pagination-pages">
        {/* Muestra hasta 5 números de página a la vez */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`pagination-number ${currentPage === page ? 'active' : ''}`}
          >
            {page}
          </button>
        ))}
      </div>
      <button className="pagination-button" disabled={currentPage === totalPages}>
        &rsaquo;
      </button>
    </div>
  );
};

export default Pagination;
