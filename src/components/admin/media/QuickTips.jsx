import { Lightbulb } from "lucide-react";

import SectionHeader from "../ui/SectionHeader";

import { quickTips } from "../../../constants/data";

export default function QuickTips() {
  return (
    <div className="col-start-4 col-end-5 row-start-4 row-end-5 flex flex-col gap-4 py-3 px-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Quick Tips"
        description="Helpful recommendations for managing and optimizing your media files."
      />
      <ul className="list-none flex flex-col gap-4">
        {quickTips.map((tip) => (
          <li className="flex items-start gap-2 text-sm" key={tip}>
            <Lightbulb
              size={15}
              className="mt-1 shrink-0 text-orange-600"
              aria-hidden
            />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
