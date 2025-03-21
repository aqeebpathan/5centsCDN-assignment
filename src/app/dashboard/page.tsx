"use client";
import { useState } from "react";
import ProtectedRoute from "../_components/ProtectRoute";
import DataTable from "../_components/DataTable";
import { useFetch } from "../hook/useFetch";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, error, isLoading, totalPages } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    { page: currentPage, limit: 5, search: searchQuery },
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto h-fit">
        <DataTable
          data={data}
          error={error}
          isLoading={isLoading}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onSearch={handleSearch}
        />
      </div>
    </ProtectedRoute>
  );
}
