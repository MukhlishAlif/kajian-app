type Transaction = {
  id: string;
  type: "income" | "expense";
  amount: number;
  category: string;
  date: string;
};

export default function TransactionItem({ tx }: { tx: Transaction }) {
  return (
    <li className="flex justify-between items-center ps-2 pe-3 py-3">
      <div>
        <p className="font-medium">{tx.category}</p>
        <span className="text-sm text-gray-500">{tx.date}</span>
      </div>
      <span
        className={`font-semibold ${tx.type === "income" ? "text-green-600" : "text-red-600"
          }`}
      >
        {tx.type === "income" ? "+" : "-"} Rp {tx.amount.toLocaleString()}
      </span>
    </li>
  );
}
