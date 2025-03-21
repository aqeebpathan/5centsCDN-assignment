"use client";

import { ReactNode } from "react";
// import Header from "../_components/Header";
import Sidebar from "../_components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-auto p-4">
        {/* <Header /> */}
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
}
