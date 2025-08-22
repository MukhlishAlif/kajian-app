"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";

type Transaction = {
    id: string;
    type: "income" | "expense";
    amount: number;
    category: string;
    date: string;
    detail: string;
};

type Props = {
    transactions: Transaction[];
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
    onView?: (id: string) => void;
};

export default function TransactionTable({
    transactions,
    onEdit,
    onDelete,
    onView,
}: Props) {
    return (
        <div className="overflow-x-auto border rounded-lg">
            <table className="w-full text-sm border-collapse">
                <thead className="bg-neutral-800 text-white">
                    <tr>
                        <th className="px-3 py-2 text-left">Tanggal</th>
                        <th className="px-3 py-2 text-left">Kategori</th>
                        <th className="px-3 py-2 text-left">Tipe</th>
                        <th className="px-3 py-2 text-left">Jumlah</th>
                        <th className="px-3 py-2 text-left">Keterangan</th>
                        <th className="px-3 py-2 text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tx) => (
                        <tr
                            key={tx.id}
                            className="hover:bg-neutral-900 transition-colors"
                        >
                            <td className="px-3 py-2 border-t">{tx.date}</td>
                            <td className="px-3 py-2 border-t">{tx.category}</td>
                            <td
                                className={`px-3 py-2 border-t font-medium ${tx.type === "income" ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {tx.type === "income" ? "Pemasukan" : "Pengeluaran"}
                            </td>
                            <td className="px-3 py-2 border-t">
                                Rp {tx.amount.toLocaleString("id-ID")}
                            </td>
                            <td className="px-3 py-2 border-t">{tx.detail}</td>
                            <td className="px-3 py-2 border-t text-center">
                                <div className="flex justify-center gap-2">
                                    <button
                                        onClick={() => onView?.(tx.id)}
                                        className="p-1 rounded hover:bg-neutral-700"
                                    >
                                        <Eye className="w-4 h-4 text-blue-500" />
                                    </button>
                                    <button
                                        onClick={() => onEdit?.(tx.id)}
                                        className="p-1 rounded hover:bg-neutral-700"
                                    >
                                        <Pencil className="w-4 h-4 text-green-600" />
                                    </button>
                                    <button
                                        onClick={() => onDelete?.(tx.id)}
                                        className="p-1 rounded hover:bg-neutral-700"
                                    >
                                        <Trash2 className="w-4 h-4 text-red-600" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
