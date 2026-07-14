import { serviceHighlights } from "../../constants/data";

import ServiceHighlight from "./ServiceHighlight";

export default function ServiceHighlights() {
  return (
    <ul className="list-none flex gap-6 mt-auto max-sm:flex-col">
      {serviceHighlights.map((item) => (
        <ServiceHighlight
          key={item.description}
          Icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
}
