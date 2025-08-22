"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Boxes, Users, Package } from "lucide-react";

export default function Sidebar() {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [openManajemen, setOpenManajemen] = useState(false);

  return (
    <aside className="flex flex-col w-56 max-h-screen container-primary body-primary shadow-lg px-4 pt-2 pb-3">
      {/* Header */}
      <div className="flex items-center mb-2">
        <label className="head-primary font-semibold text-lg">Kajian</label>
      </div>

      {/* Divider */}
      <div className="divider-horizontal mt-2 mb-4"></div>

      {/* Navigation Links */}
      <nav className="flex flex-col justify-between h-full text-sm">
        <div className="flex flex-col space-y-1">
          {/* Dashboard Link */}
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-2 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition"
          >
            <Boxes size={16} />
            <span>Dashboard</span>
          </Link>

          {/* Transactions Link */}
          <Link
            href="/transaction"
            className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-neutral-800 transition"
          >
            <Package size={16} />
            <span>Transaksi</span>
          </Link>

          {/* Manajemen (Collapsible) */}
          <div>
            <button
              onClick={() => setOpenManajemen(!openManajemen)}
              className="flex items-center justify-between w-full px-2 py-2 rounded-lg hover:bg-neutral-800 transition"
            >
              <span className="flex items-center gap-2">
                <Users size={16} />
                Manajemen
              </span>
              {openManajemen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>

            {openManajemen && (
              <ul className="ml-6 mt-2 space-y-1 border-l border-neutral-700 pl-2">
                <li>
                  <Link
                    href="/manage/items"
                    className="block px-2 py-1 rounded-lg hover:bg-neutral-800 transition"
                  >
                    Kategori & Produk
                  </Link>
                </li>
                <li>
                  <Link
                    href="/manage/users"
                    className="block px-2 py-1 rounded-lg hover:bg-neutral-800 transition"
                  >
                    Pengguna
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Footer / Logout */}
        <div className="flex flex-row justify-start mt-auto">
          <button
            onClick={() => setLogoutOpen(true)}
            className="flex items-center gap-2 px-2 py-2 rounded-lg button-badge-danger hover:opacity-90 transition"
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
