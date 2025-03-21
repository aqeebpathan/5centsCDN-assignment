"use client";
import React from "react";
import Button from "./Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="mt-8 flex items-center justify-between gap-4 pb-4">
      <Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="w-full rounded px-4 py-2 disabled:bg-[#383838]"
      >
        Previous
      </Button>

      <span className="hidden shrink-0 sm:block">
        Page {currentPage} of {totalPages}
      </span>

      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="w-full rounded px-4 py-2 disabled:bg-[#383838]"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
