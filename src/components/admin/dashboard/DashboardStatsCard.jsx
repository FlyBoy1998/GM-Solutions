export default function DashboardStatsCard({
  title,
  value,
  icon: Icon,
  bgColor,
}) {
  return (
    <div className="col-span-1 flex items-center gap-3 p-4 rounded-lg shadow-md bg-white hover:bg-slate-50 transition-colors">
      <div className={`p-4 rounded-full ${bgColor}`}>
        <Icon className="text-white" aria-hidden />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs font-bold text-gray-dark">{title}</p>
        <p className="text-lg font-bold">{value}+</p>
      </div>
    </div>
  );
}
