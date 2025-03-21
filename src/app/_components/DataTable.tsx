"use client";
import { Loader } from "lucide-react";
import React, { useState } from "react";

import Input from "./Input";
import Pagination from "./Pagination";

interface Post {
  id: string;
  title: string;
  body: string;
}

interface DataTableProps {
  data: Post[];
  error?: boolean;
  isLoading?: boolean;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onSearch: (query: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  error,
  isLoading,
  totalPages,
  currentPage,
  onPageChange,
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader className="mt-12 size-12 animate-spin" />
      </div>
    );
  if (error) return <div>Error loading data.</div>;

  return (
    <div>
      {/* Search Bar */}
      <div className="my-14 mb-6 flex w-full items-center justify-center">
        <Input
          id="Search"
          placeholder="Search by title or ID"
          value={searchTerm}
          className="sm:w-sm"
          onChange={handleSearchChange}
        />
      </div>

      {/* Data Table */}
      <div role="table" aria-label="Posts Table" className="w-full">
        <div
          className="border-active hidden grid-cols-[6rem_1fr_2fr] border-b p-2 font-bold sm:grid sm:gap-4"
          role="rowheader"
        >
          <h1 className="w-24" role="columnheader">
            Post Id
          </h1>
          <p className="w-full" role="columnheader">
            Title
          </p>
          <p role="columnheader">Body</p>
        </div>
        {data.map((post) => (
          <div
            key={post.id}
            className="border-active flex flex-col border-b p-2 sm:grid sm:grid-cols-[6rem_1fr_2fr] sm:gap-4"
            role="row"
          >
            <h1 className="w-24 text-xl font-medium sm:text-[16px]" role="cell">
              <span className="sm:hidden">#</span>
              {post.id}
            </h1>
            <p className="w-full font-semibold" role="cell">
              {post.title}
            </p>
            <p role="cell" className="mt-2 mb-2 sm:mt-0 sm:mb-0">
              {post.body}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default DataTable;
