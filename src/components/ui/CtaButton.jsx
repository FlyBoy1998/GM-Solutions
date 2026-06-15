export default function CtaButton({ children, type }) {
  let classes =
    "cursor-pointer px-4 py-3 font-bold rounded-md focus-ring transition-all duration-400 ease-out";

  if (type === "primary") {
    classes += " bg-primary text-white hover:bg-primary-transparent";
  }
  if (type === "secondary") {
    classes += " bg-white text-black border border-black hover:bg-gray";
  }

  return <button className={classes}>{children}</button>;
}
