export default function DropdownButton({
  variant = "primary",
  Icon,
  children,
  onClick,
}) {
  let classes =
    "cursor-pointer flex items-center gap-4 p-2 rounded-md transition-colors focus-ring bg-white";
  let textColor;

  if (variant === "primary") {
    classes += " hover:bg-light";
    textColor = "text-black";
  }
  if (variant === "danger") {
    classes += " hover:bg-red-100";
    textColor = "text-red-500";
  }

  return (
    <button className={classes} onClick={onClick}>
      <Icon size={16} strokeWidth={2} className={textColor} aria-hidden />
      <span className={`text-xs ${textColor}`}>{children}</span>
    </button>
  );
}
