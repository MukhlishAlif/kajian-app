type Props = {
    title: string;
    summary: number;
};

export default function SummaryCard({ title, summary }: Props) {
    return (
        <div className={`p-4 rounded-md container-secondary`}>
            <h3 className="text-sm body-secondary font-medium">{title}</h3>
            <p className="text-xl body-primary font-bold mt-2 text-center">{summary.toLocaleString()}</p>
        </div>
    );
}
