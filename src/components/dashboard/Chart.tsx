"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

type DataPoint = {
    date: string;
    income: number;
    expense: number;
};

const data: DataPoint[] = [
    { date: "2025-08-01", income: 400000, expense: 200000 },
    { date: "2025-08-05", income: 300000, expense: 180000 },
    { date: "2025-08-10", income: 500000, expense: 250000 },
    { date: "2025-08-15", income: 350000, expense: 120000 },
    { date: "2025-08-17", income: 600000, expense: 400000 },
];

export default function Chart() {
    return (
        <div className="w-full h-80 shadow-lg p-4">
            <h2 className="text-xl font-semibold body-secondary mb-4">Grafik Keuangan</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis
                        dataKey="date"
                        tick={{ fill: "#FFFFFF", fontSize: 10 }}
                        tickFormatter={(date) =>
                            new Date(date).toLocaleDateString("id-ID", { day: "2-digit", month: "short" })
                        }
                    />

                    <YAxis
                        tick={{ fill: "#FFFFFF", fontSize: 10 }}
                        tickFormatter={(value) => `Rp.${value.toLocaleString()}`}
                    />

                    <Tooltip />
                    <Line type="monotone" dataKey="income" stroke="#22c55e" strokeWidth={2} />
                    <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
