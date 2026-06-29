export default function ProjectMobileTabButton({
  isActive,
  Icon,
  label,
  onClick,
}) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
      className={`flex flex-1 flex-col items-center gap-1 border-b-3 py-2 transition-all ${
        isActive
          ? "border-primary text-primary"
          : "border-transparent text-gray-dark"
      }`}
    >
      <Icon aria-hidden />
      <span className="text-sm font-bold">{label}</span>
    </button>
  );
}
