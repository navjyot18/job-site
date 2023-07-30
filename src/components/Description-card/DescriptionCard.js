export function DescriptionCard({ title, value }) {
  return (
    <div className="bg-slate-100 flex flex-col items-center justify-center p-2 rounded-md">
      <div className="text-slate-500 text-sm text-center">{title}</div>
      <div className="font-bold text-lg text-center">{value}</div>
    </div>
  );
}
