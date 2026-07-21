export default function IconButton({ variant, Icon, ariaLabel }) {
  let bgColor;

  if (variant === "view" || variant === "edit") {
    bgColor = "bg-blue-100";
  }
  if (variant === "delete") {
    bgColor = "bg-red-100";
  }

  return (
    <button
      className={`cursor-pointer flex justify-center items-center p-1 rounded-md ${bgColor}`}
      aria-label={ariaLabel}
    >
      {<Icon size={14} aria-hidden />}
    </button>
  );
}
