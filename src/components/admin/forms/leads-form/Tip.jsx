import { Info } from "lucide-react";

export default function Tip() {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg bg-blue-100">
      <h2 className="heading-xs flex items-center gap-2 text-blue-500">
        <Info size={20} strokeWidth={2} className="text-blue-500" aria-hidden />
        <span className="font-bold">Tip</span>
      </h2>
      <p className="text-xs">
        Keep detailed notes and update status as the lead progresses. You can
        always edit this information later.
      </p>
    </div>
  );
}
