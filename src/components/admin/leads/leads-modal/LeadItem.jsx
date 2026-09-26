export default function LeadItem({ className = "", Icon, label, value }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <Icon size={20} className="text-black" aria-hidden />
      <div className="flex flex-col">
        <p className="text-xs text-gray-dark">{label}</p>
        <p className={`text-sm ${!value ? "text-red-400" : ""}`}>
          {value || "Not specified."}
        </p>
      </div>
    </div>
  );
}
