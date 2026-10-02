export default function CtaButton({
  children,
  Icon = null,
  variant,
  size = "medium",
  isFullWidth = false,
  ...props
}) {
  let classes =
    "cursor-pointer flex items-center justify-center gap-1 font-bold rounded-md focus-ring transition-all duration-400 ease-out disabled:cursor-not-allowed";
  let iconSize;
  let iconClasses;

  if (variant === "primary") {
    classes +=
      " bg-primary text-white border-2 border-primary hover:bg-primary-light disabled:bg-primary-transparent";
    iconClasses = "text-white";
  }
  if (variant === "secondary") {
    classes +=
      " bg-white text-black border-2 border-black hover:bg-gray disabled:bg-gray-light";
    iconClasses = "text-black";
  }
  if (variant === "danger") {
    classes +=
      " bg-white text-red-500 border-2 border-red-500 hover:bg-red-100 disabled:bg-red-50";
    iconClasses = "text-red-500";
  }
  if (isFullWidth) {
    classes += " w-full";
  }

  if (size === "small") {
    classes += " px-2 py-1 text-xs";
    iconSize = 16;
  }
  if (size === "medium") {
    classes += " px-3 py-2 text-sm";
    iconSize = 18;
  }
  if (size === "large") {
    classes += " px-4 py-3 text-md";
    iconSize = 22;
  }

  return (
    <button className={classes} {...props}>
      {Icon && (
        <Icon
          size={iconSize}
          strokeWidth={2}
          className={iconClasses}
          aria-hidden
        />
      )}
      <span>{children}</span>
    </button>
  );
}
