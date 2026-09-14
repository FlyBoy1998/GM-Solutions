import { X } from "lucide-react";

import { formatToCapitalize } from "../../../../utils/utils";

export default function MaterialsUsedItem({ material, onDelete }) {
  return (
    <span
      className="relative p-1 text-xs rounded-md border border-slate-500 bg-slate-100"
      key={material}
    >
      {formatToCapitalize(material)}
      <button
        className="cursor-pointer absolute top-[-25%] p-px rounded-full text-white bg-red-500 hover:bg-red-400 transition-colors"
        title="Delete material"
        aria-label="Delete Material"
        onClick={onDelete}
      >
        <X size={12} aria-hidden />
      </button>
    </span>
  );
}
