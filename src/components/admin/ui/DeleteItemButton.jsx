import { Trash } from "lucide-react";

export default function DeleteItemButton({ onClick, ...props }) {
  return (
    <button
      type="button"
      className="cursor-pointer p-2 rounded-md border border-red-500 hover:text-red-50 transition-colors focus-ring"
      onClick={onClick}
      {...props}
    >
      <Trash size={16} className="text-red-500" aria-hidden />
    </button>
  );
}
