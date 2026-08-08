export default function ServicePerformanceMetric({ label, icon, value }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-md border border-slate-100">
      {icon}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold text-gray-dark">{label}</p>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
  );
}
