import DeleteItemButton from "../../ui/DeleteItemButton";

export default function WorkCompletedItem({ item, onClick }) {
  return (
    <li className="flex gap-2 text-sm text-gray-dark">
      <p className="flex-1 py-2 px-3 rounded-md border border-slate-500 hover:bg-slate-50 transition-colors">
        {item.description}
      </p>
      <DeleteItemButton
        onClick={onClick}
        aria-label="Delete Work Completed Item"
      />
    </li>
  );
}
