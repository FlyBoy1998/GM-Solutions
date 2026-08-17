export default function DashboardStatsCard({ title, value, icon, bgColor }) {
  return (
    <div className="col-span-1 flex justify-center items-center gap-3 p-4 rounded-lg shadow-md bg-white hover:bg-slate-50 transition-colors">
      <div className={`p-4 rounded-full ${bgColor}`}>{icon}</div>
      <div className="flex flex-col gap-1">
        <p className="text-xs font-bold text-gray-dark">{title}</p>
        <p className="text-lg font-bold">{value}+</p>
      </div>
    </div>
  );
}
