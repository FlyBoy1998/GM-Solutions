import { Trash } from "lucide-react";

export default function WorkCompletedItem({ id, description, onDelete }) {
  return (
    <li className="flex gap-2 text-sm text-gray-dark">
      <p className="flex-1 py-2 px-3 rounded-md border border-slate-500 hover:bg-slate-50 transition-colors">
        {description}
      </p>
      <button
        type="button"
        className="cursor-pointer p-2 rounded-md border border-red-500 hover:bg-red-50 transition-colors focus-ring"
        onClick={() => onDelete(id)}
        aria-label="Delete Work Completed Item"
      >
        <Trash size={16} className="text-red-500" aria-hidden />
      </button>
    </li>
  );
}
