export default function AddItemButton({ Icon, onClick, children }) {
  return (
    <button
      type="button"
      className="cursor-pointer flex justify-center items-center gap-1 h-10 w-full text-sm rounded-md border border-slate-500 transition-colors hover:bg-slate-50 focus-ring"
      onClick={onClick}
    >
      <Icon size={20} aria-hidden /> <span>{children}</span>
    </button>
  );
}
