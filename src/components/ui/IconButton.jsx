export default function IconButton({ variant, Icon, ariaLabel }) {
  let bgColor;
  let iconClasses;

  if (variant === "view" || variant === "edit") {
    bgColor = "bg-blue-100";
    iconClasses = "text-blue-500";
  }
  if (variant === "delete") {
    bgColor = "bg-red-100";
    iconClasses = "text-red-500";
  }

  return (
    <button
      className={`cursor-pointer flex justify-center items-center p-1 rounded-md ${bgColor}`}
      aria-label={ariaLabel}
    >
      {<Icon size={14} className={iconClasses} aria-hidden />}
    </button>
  );
}
