export default function ProjectsOverviewItem({
  Icon,
  value,
  label,
  iconClassName,
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon
        size={32}
        className={`p-2 rounded-md ${iconClassName}`}
        aria-hidden
      />
      <span className="flex items-center gap-1">
        <span className="font-bold">{value}</span>
        <span className="text-xs text-gray-dark">{label}</span>
      </span>
    </div>
  );
}
