import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      className="flex items-center justify-between mt-auto py-2 border-t border-slate-200"
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
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`cursor-pointer h-10 w-10 rounded-lg text-sm font-semibold transition
              ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "border border-slate-200 hover:bg-slate-50"
              }`}
          >
            {page}
          </button>
        ))}
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
