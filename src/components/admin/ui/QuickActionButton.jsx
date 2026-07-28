import { ChevronRight } from "lucide-react";

export default function QuickActionButton({
  Icon,
  iconClassName,
  children,
  ...props
}) {
  return (
    <button
      className="cursor-pointer flex items-center justify-between w-full py-2 border-b border-slate-100"
      {...props}
    >
      <span className="flex items-center gap-2.5">
        <Icon
          size={36}
          className={`p-2 rounded-md ${iconClassName}`}
          aria-hidden
        />
        <span className="text-xs font-bold">{children}</span>
      </span>
      <span>
        <ChevronRight size={14} aria-hidden />
      </span>
    </button>
  );
}
