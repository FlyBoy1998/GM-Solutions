export default function CtaButton({
  children,
  variant,
  size = "medium",
  isFullWidth = false,
  ...props
}) {
  let classes =
    "cursor-pointer font-bold rounded-md focus-ring transition-all duration-400 ease-out disabled:cursor-not-allowed";

  if (variant === "primary") {
    classes +=
      " bg-primary text-white border-2 border-primary hover:bg-primary-transparent disabled:bg-primary-transparent";
  }
  if (variant === "secondary") {
    classes +=
      " bg-white text-black border-2 border-black hover:bg-gray disabled:bg-gray-transparent";
  }
  if (variant === "danger") {
    classes +=
      " bg-red-500 text-white border-2 border-red-500 hover:bg-white hover:text-red-500 disabled:bg-red-50";
  }
  if (isFullWidth) {
    classes += " w-full";
  }

  if (size === "small") {
    classes += " px-2 py-1 text-xs";
  }
  if (size === "medium") {
    classes += " px-3 py-2 text-sm";
  }
  if (size === "large") {
    classes += " px-4 py-3 text-md";
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
