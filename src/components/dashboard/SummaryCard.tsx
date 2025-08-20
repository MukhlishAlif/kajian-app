type Props = {
  title: string;
  amount: number;
};

export default function SummaryCard({ title, amount }: Props) {
  return (
    <div className={`p-4 rounded-md container-secondary`}>
      <h3 className="text-sm body-secondary font-medium">{title}</h3>
      <p className="text-xl body-primary font-bold mt-2">Rp {amount.toLocaleString()}</p>
    </div>
  );
}
