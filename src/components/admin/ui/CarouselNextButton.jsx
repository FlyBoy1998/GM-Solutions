import { ChevronRight } from "lucide-react";

export default function CarouselNextButton({ onClick, disabled }) {
  return (
    <button
      className="carousel-button right-2"
      onClick={onClick}
      disabled={disabled}
    >
      <ChevronRight
        size={16}
        strokeWidth={3}
        className="text-primary"
        aria-hidden
      />
    </button>
  );
}
