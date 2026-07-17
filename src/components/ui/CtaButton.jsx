export default function CtaButton({
  children,
  variant,
  isFullWidth = false,
  ...props
}) {
  let classes =
    "cursor-pointer px-4 py-3 font-bold rounded-md focus-ring transition-all duration-400 ease-out";

  if (variant === "primary") {
    classes += " bg-primary text-white hover:bg-primary-transparent";
  }
  if (variant === "secondary") {
    classes += " bg-white text-black border border-black hover:bg-gray";
  }
  if (isFullWidth) {
    classes += " w-full";
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
