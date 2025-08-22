import Layout from "@/components/layout/Layout";
import SummaryCard from "@/components/common/CashSummaryCard";
import AlertMessage from "@/components/common/AlertMessage";
import TransactionTable from "@/components/transaction/TransactionTable";
import { FileDown, FileUp } from "lucide-react";

type Transaction = {
    id: string;
    type: "income" | "expense";
    amount: number;
    category: string;
    date: string;
    detail: string;
};

export default function UsersPage() {
    const transactions: Transaction[] = [
        { id: "1", type: "income", amount: 200000, category: "Penjualan Produk", date: "2025-08-15", detail: "Detail transaksi" },
        { id: "2", type: "expense", amount: 50000, category: "Biaya Operasional", date: "2025-08-16", detail: "Detail transaksi" },
        { id: "3", type: "income", amount: 100000, category: "Layanan", date: "2025-08-17", detail: "Detail transaksi" }
    ];

    return (
        <Layout>
            {/* breadcrumb placeholder */}
            <div className="flex flex-row mx-4 my-2 text-xs text-neutral-400">#todo breadcrumb</div>

            <div className="flex flex-col mx-4 flex-grow container-secondary rounded-lg shadow-lg p-6">
                {/* title and description */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold head-primary">Transaksi</h1>
                    <p className="body-secondary text-sm">Atur dan lihat riwayat transaksi anda.</p>
                </div>

                {/* summary cards */}
                <div className="flex flex-row gap-4 mb-8">
                    <SummaryCard title="Total Pendapatan" amount={1250000} />
                    <SummaryCard title="Total Pengeluaran" amount={850000} />
                    <SummaryCard title="Saldo Bersih" amount={400000} />
                </div>

                {/* divider + action buttons */}
                <div className="divider-horizontal mb-4"></div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                        <button className="inline-flex items-center button-secondary-danger focus:outline-none" type="button">
                            <FileDown className="w-4 h-4 mr-1" />
                            Import
                        </button>
                        <button className="inline-flex items-center button-secondary-danger focus:outline-none" type="button">
                            <FileUp className="w-4 h-4 mr-1" />
                            Export
                        </button>
                    </div>

                    {/* Alert message */}
                    <AlertMessage message="Transaksi telah berhasil dibuat" visible={true} />
                </div>

                {/* Transaction Table */}
                <TransactionTable transactions={transactions} />
            </div>
        </Layout>
    );
}
