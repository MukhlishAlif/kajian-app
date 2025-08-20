"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [logoutOpen, setLogoutOpen] = useState(false);

  return (
    <aside className="flex flex-col w-48 max-h-screen container-primary body-primary shadow-lg px-4 pt-2 pb-3">
      {/* Header */}
      <div className="flex items-center">
        <label className="head-primary font-semibold">Kajian</label>
      </div>

      {/* Divider */}
      <div className="divider-horizontal mt-2 mb-4"></div>

      {/* Navigation Links */}
      <nav className="flex flex-col justify-between h-full text-sm">
        <div className="flex flex-col space-y-1">
          {/* Dashboard Link */}
          <Link
            href="/users"
            className="flex items-center pb-1 hover:text-blue-500"
          >
            <span>Dashboard</span>
          </Link>

          {/* Transactions Link */}
          <Link
            href="/history"
            className="flex items-center pb-1 hover:text-blue-500"
          >
            <span>Transactions</span>
          </Link>
        </div>

        <div className="flex flex-row justify-start space-x-1 mt-auto">

          {/* Logout Button */}
          <button
            onClick={() => setLogoutOpen(true)}
            className="flex items-center button-badge-danger focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 
              3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
            </svg>
          </button>
        </div>
      </nav>
    </aside>
  );
}
