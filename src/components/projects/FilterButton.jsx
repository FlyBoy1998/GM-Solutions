import { useSearchParams } from "react-router";

export default function FilterButton({ children, filter, Icon }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  const isActive = category === filter;

  let classes =
    "cursor-pointer flex justify-center items-center flex-1 gap-1 px-1 py-2 font-semibold text-[0.75rem] rounded-md hover:bg-primary-transparent hover:text-white transition-all duration-400 ease-out";
  let activeFilter = " bg-primary text-white";

  function handleSetSearchParams() {
    if (category === filter) return;

    setSearchParams((prev) => {
      prev.set("category", filter);
      return prev;
    });
  }

  return (
    <button
      className={`${classes} ${isActive ? activeFilter : ""} focus-ring`}
      onClick={handleSetSearchParams}
      aria-pressed={isActive}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
}
