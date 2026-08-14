import { EllipsisVertical } from "lucide-react";

import { formatDate, formatBytes } from "../../../utils/utils";

export default function MediaCard({ mediaFile }) {
  let imageClasses = "object-cover h-full w-full";

  return (
    <article className="col-span-1 flex flex-col rounded-lg shadow-md overflow-hidden bg-white">
      <div className="h-28 overflow-hidden">
        <img
          src={mediaFile.imgUrl}
          className={`${imageClasses} ${mediaFile.isImage ? "scale-125" : ""}`}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold">{mediaFile.name}</p>
          <button className="cursor-pointer">
            <EllipsisVertical size={18} />
          </button>
        </div>
        <p className="text-xs text-gray-dark">
          {`${formatBytes(mediaFile.metadata?.size)}`} • {mediaFile.format}
        </p>
        <p className="text-xs text-gray-dark">
          {formatDate(mediaFile.created_at.split("T")[0])}
        </p>
      </div>
    </article>
  );
}
