import { useState } from "react";

import { Pen, Eye } from "lucide-react";

import ToggleButton from "./ToggleButton";
import ServiceCardButton from "./ServiceCardButton";

export default function ServiceCard({
  imgUrl,
  imgAlt,
  Icon,
  title,
  description,
}) {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <div className="col-span-1 flex flex-col gap-4 h-full p-3 rounded-md bg-light">
      <div className="relative flex-1 rounded-md overflow-hidden">
        <Icon
          className="absolute bottom-2 left-2 p-2 rounded-md text-white bg-primary"
          size={40}
          aria-hidden
        />
        <img src={imgUrl} className="object-cover h-full w-full" alt={imgAlt} />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ServiceCardButton Icon={Pen}>Edit</ServiceCardButton>
            <ServiceCardButton Icon={Eye}>View</ServiceCardButton>
          </div>
          <div className="flex items-center gap-2">
            <ToggleButton
              isToggled={isToggled}
              onChange={() => setIsToggled((prev) => !prev)}
            />
            <p className="text-xs">Visible</p>
          </div>
        </div>
      </div>
    </div>
  );
}
