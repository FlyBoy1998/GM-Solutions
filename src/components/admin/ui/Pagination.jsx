import { ChevronLeft, ChevronRight } from "lucide-react";

import { getPaginationPages } from "../../../utils/utils";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = getPaginationPages(totalPages, currentPage);

  return (
    <nav
      className="flex items-center justify-between mt-auto py-4 border-t border-slate-200"
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-nav-btn"
        aria-label="Previous Page"
      >
        <ChevronLeft size={16} />
      </button>

      <div className="flex items-center gap-2">
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`elipsis-${index}`}
                className="flex items-center justify-center h-10 w-10 text-sm text-gray-dark"
              >
                ...
              </span>
            );
          }

          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`cursor-pointer h-10 w-10 rounded-lg text-sm font-semibold transition
              ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "border border-slate-200 hover:bg-slate-50"
              }`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-nav-btn"
        aria-label="Next Page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
