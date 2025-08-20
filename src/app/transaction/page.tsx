import Layout from "@/components/layout/Layout";
import SummaryCard from "@/components/dashboard/SummaryCard";
import TransactionItem from "@/components/dashboard/TransactionItem";
import Chart from "@/components/dashboard/Chart";

type Transaction = {
    id: string;
    type: "income" | "expense";
    amount: number;
    category: string;
    date: string;
};

export default function DashboardPage() {
    const transactions: Transaction[] = [
        { id: "1", type: "income", amount: 200000, category: "Penjualan Produk", date: "2025-08-15" },
        { id: "2", type: "expense", amount: 50000, category: "Biaya Operasional", date: "2025-08-16" },
        { id: "3", type: "income", amount: 100000, category: "Layanan", date: "2025-08-17" },
    ];

    return (
        <Layout>
            <div className="flex flex-row mx-4 my-1 shadow-lg overflow-hidden text-sm">
                #todo breadcrumb
            </div>

            <div className="flex flex-col mx-4 flex-grow container-secondary rounded-lg shadow-lg overflow-hidden">
                {/* title and description */}
                <div className="flex flex-col mx-4 mb-16 mt-2">
                    <h1 className="text-2xl font-bold head-primary">Dashboard</h1>
                    <p className="body-secondary text-xs">
                        Semua kebutuhan usaha anda dikaji disini.
                    </p>
                </div>

                {/* summary cards */}
                <div className="flex flex-row space-x-4 mx-4 mb-6 h-80">
                    <div className="flex flex-col space-y-4 w-1/3 p-4 mt-2">
                        <SummaryCard title="Total Pendapatan" amount={1250000} />
                        <SummaryCard title="Total Pengeluaran" amount={850000} />
                        <SummaryCard title="Saldo Bersih" amount={400000} />
                    </div>
                    <div className="w-full">
                        <Chart />
                    </div>
                </div>

                {/* transactions list */}
                <div className="flex flex-col ms-8 me-4 mb-6">
                    <h2 className="text-xl font-semibold body-primary mb-2">Transaksi Terbaru</h2>
                    <ul className="divide-y divide-neutral-800">
                        {transactions.map((tx) => (
                            <TransactionItem key={tx.id} tx={tx} />
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
}
