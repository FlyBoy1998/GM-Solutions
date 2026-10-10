import useCarouselButtons from "../../../hooks/useCarouselButtons";

import CarouselPrevButton from "../ui/CarouselPrevButton";
import CarouselNextButton from "../ui/CarouselNextButton";

import MediaCard from "./MediaCard";

export default function MediaCarousel({ mediaFiles }) {
  const { emblaRef, emblaApi, buttons } = useCarouselButtons();

  return (
    <section className="hidden col-span-full row-start-3 row-end-4 max-md:grid">
      <div className="overflow-hidden mb-2" ref={emblaRef}>
        <div className="flex gap-3 touch-pan-y touch-pinch-zoom">
          {mediaFiles?.map((mediaFile) => (
            <MediaCard key={mediaFile.id} mediaFile={mediaFile} />
          ))}
        </div>
      </div>
      <div className="relative flex gap-2 justify-between z-1000">
        <CarouselPrevButton
          onClick={() => emblaApi?.scrollPrev()}
          disabled={buttons.prev}
        />
        <CarouselNextButton
          onClick={() => emblaApi?.scrollNext()}
          disabled={buttons.next}
        />
      </div>
    </section>
  );
}
