export default function MediaMeta({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-1">
      <Icon size={16} strokeWidth={2} className="text-dark" aria-hidden />
      <div className="flex flex-col">
        <span className="text-xs text-gray-dark">{label}</span>
        <span className="text-xs text-gray-dark">{value}</span>
      </div>
    </div>
  );
}
