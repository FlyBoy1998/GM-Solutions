import { X } from "lucide-react";

export default function ModalHeader({ modalTitle }) {
  return (
    <div className="sticky top-0 flex justify-between items-center px-4 py-6 z-50 shadow-md bg-white">
      <h2 className="heading-sm">{modalTitle}</h2>
      <form method="dialog">
        <button
          className="cursor-pointer p-2 rounded-md hover:bg-gray transition-colors"
          aria-label="Close Lead Modal"
        >
          <X size={16} className="text-black" aria-hidden />
        </button>
      </form>
    </div>
  );
}
