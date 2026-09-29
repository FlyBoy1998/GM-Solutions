import CarouselPrevButton from "../../ui/CarouselPrevButton";
import CarouselNextButton from "../../ui/CarouselNextButton";
import useCarouselButtons from "../../../../hooks/useCarouselButtons";

export default function ProjectModalCarousel({ carouselImages }) {
  const { emblaRef, emblaApi, buttons } = useCarouselButtons();

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

      <CarouselPrevButton
        onClick={() => emblaApi?.scrollPrev()}
        disabled={buttons.prev}
      />
      <CarouselNextButton
        onClick={() => emblaApi?.scrollNext()}
        disabled={buttons.next}
      />
    </div>
  );
}
