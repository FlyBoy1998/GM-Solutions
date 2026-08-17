import { Lightbulb } from "lucide-react";

import { quickTips } from "../../../constants/data";

export default function QuickTips() {
  return (
    <div className="col-start-4 col-end-5 row-start-4 row-end-5 py-3 px-4 rounded-lg shadow-md bg-white">
      <h3 className="mb-2 font-bold">Quick Tips</h3>
      <ul className="list-none flex flex-col gap-2">
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
