import { formatToCapitalize } from "../../../../utils/utils";

export default function MaterialsUsedItem({ material }) {
  return (
    <span
      className="p-1 text-xs rounded-md border border-slate-500 bg-slate-100"
      key={material}
    >
      {formatToCapitalize(material)}
    </span>
  );
}
