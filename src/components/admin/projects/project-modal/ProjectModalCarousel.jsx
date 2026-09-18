import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectModalCarousel({ carouselImages }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    inViewThreshold: 0.5,
  });

  const [buttons, setButtons] = useState({
    prev: true,
    next: false,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = (api) => {
      setButtons({
        prev: !api.canScrollPrev(),
        next: !api.canScrollNext(),
      });
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative max-md:flex-1">
      <div className="h-full overflow-hidden rounded-md" ref={emblaRef}>
        <div className="flex gap-5 touch-pan-y touch-pinch-zoom">
          {carouselImages?.map((image) => (
            <div
              className="flex-[0_0_100%] pl-(--modal-carousel-slide-spacing) min-w-0 overflow-hidden"
              key={image?.storage_path.publicUrl}
            >
              <img
                src={image?.storage_path.publicUrl}
                className="scale-125 w-full h-full object-cover"
                alt="Carousel image"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-button left-2"
        onClick={() => emblaApi?.scrollPrev()}
        disabled={buttons.prev}
      >
        <ChevronLeft
          size={16}
          strokeWidth={3}
          className="text-primary"
          aria-hidden
        />
      </button>

      <button
        className="carousel-button right-2"
        onClick={() => emblaApi?.scrollNext()}
        disabled={buttons.next}
      >
        <ChevronRight
          size={16}
          strokeWidth={3}
          className="text-primary"
          aria-hidden
        />
      </button>
    </div>
  );
}
