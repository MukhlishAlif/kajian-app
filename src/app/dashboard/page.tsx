import Layout from "@/components/layout/Layout";
import CashSummaryCard from "@/components/common/CashSummaryCard";
import TransactionItem from "@/components/dashboard/TransactionHistory";
import CashChart from "@/components/dashboard/CashChart";

type Transaction = {
  id: string;
  type: "income" | "expense";
  amount: number;
  category: string;
  date: string;
  detail: string;
};

export default function DashboardPage() {
  const transactions: Transaction[] = [
    { id: "1", type: "income", amount: 200000, category: "Penjualan Produk", date: "2025-08-15", detail: "Detail transaksi" },
    { id: "2", type: "expense", amount: 50000, category: "Biaya Operasional", date: "2025-08-16", detail: "Detail transaksi" },
    { id: "3", type: "income", amount: 100000, category: "Layanan", date: "2025-08-17", detail: "Detail transaksi" }
  ];

  return (
    <Layout>
      {/* breadcrumb placeholder */}
      <div className="flex flex-row mx-4 my-2 text-xs text-neutral-400">
        #todo breadcrumb
      </div>

      <div className="flex flex-col mx-4 flex-grow container-secondary rounded-lg shadow-lg p-6">
        {/* title and description */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold head-primary">Dashboard</h1>
          <p className="body-secondary text-sm">
            Semua kebutuhan usaha anda dikaji disini.
          </p>
        </div>

        {/* summary + transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* summary cards */}
          <div className="flex flex-col gap-4">
            <CashSummaryCard title="Total Pendapatan" amount={1250000} />
            <CashSummaryCard title="Total Pengeluaran" amount={850000} />
            <CashSummaryCard title="Saldo Bersih" amount={400000} />
          </div>

          {/* transactions list */}
          <div className="lg:col-span-2 flex flex-col bg-neutral-900/40 rounded-lg p-4">
            <h2 className="text-xl font-semibold body-secondary mb-4">
              Transaksi Terbaru
            </h2>
            <ul className="divide-y divide-neutral-800 max-h-64 overflow-y-auto pr-2">
              {transactions.map((tx) => (
                <TransactionItem key={tx.id} tx={tx} />
              ))}
            </ul>
          </div>
        </div>

        {/* chart */}
        <div className="flex flex-col flex-grow bg-neutral-900/40 rounded-lg p-4">
          <CashChart />
        </div>
      </div>
    </Layout>
  );
}
