import { ChevronLeft } from "lucide-react";

export default function CarouselPrevButton({ onClick, disabled }) {
  return (
    <button
      className="carousel-button left-2"
      onClick={onClick}
      disabled={disabled}
    >
      <ChevronLeft
        size={16}
        strokeWidth={3}
        className="text-primary"
        aria-hidden
      />
    </button>
  );
}
