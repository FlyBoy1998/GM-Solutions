import { createPortal } from "react-dom";
import { X, File, Calendar } from "lucide-react";

import CtaButton from "../../../ui/CtaButton";
import MediaMeta from "./MediaMeta";

import { bytesToMB, formatDate } from "../../../../utils/utils";

export default function MediaModal({ mediaFile, onDownload, onDelete, ref }) {
  const mediaType = mediaFile?.metadata.mimetype;

  return createPortal(
    <dialog
      className="modal fixed top-6 left-1/2 w-[calc(100%-3rem)] m-0 max-w-4xl -translate-x-1/2 overflow-y-auto rounded-lg border-0 shadow-2xl backdrop:bg-modal-backdrop"
      ref={ref}
    >
      <div className="flex justify-between items-center px-4 py-6">
        <div className="flex flex-col gap-1">
          <h2 className="heading-xs">{mediaFile?.name}</h2>
          <p className="text-xs text-gray-dark">
            {mediaType?.split("/")[1].toUpperCase()}
          </p>
        </div>
        <form method="dialog">
          <button
            className="cursor-pointer p-2 rounded-md hover:bg-light transition-colors"
            aria-label="Close Media Modal Button"
          >
            <X size={16} className="text-black" aria-hidden />
          </button>
        </form>
      </div>
      <div className="h-115 px-4">
        <img
          src={mediaFile?.url}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center px-4 py-6">
        <div className="flex items-center gap-4">
          <MediaMeta
            icon={File}
            label="File Size"
            value={`${bytesToMB(mediaFile?.metadata.size)}MB`}
          />
          <MediaMeta
            icon={Calendar}
            label="Uploaded"
            value={formatDate(mediaFile?.created_at.split("T")[0])}
          />
        </div>
        <div className="flex gap-2">
          <CtaButton variant="secondary" onClick={onDownload}>
            Download
          </CtaButton>
          <CtaButton variant="danger" onClick={onDelete}>
            Delete
          </CtaButton>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal"),
  );
}
