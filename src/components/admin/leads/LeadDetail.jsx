export default function LeadDetail({ icon: Icon, label, children }) {
  return (
    <div className="flex items-center gap-2">
      <Icon
        className="p-4 rounded-lg text-slate-300 bg-slate-100"
        size={56}
        aria-hidden
      />
      <div className="flex flex-col">
        <div className="text-gray-dark">{label}</div>
        {children}
      </div>
    </div>
  );
}
