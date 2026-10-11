import useCarouselButtons from "../../../hooks/useCarouselButtons";

import CarouselPrevButton from "../ui/CarouselPrevButton";
import CarouselNextButton from "../ui/CarouselNextButton";

import LeadCard from "./LeadCard";

export default function LeadsCarousel({ leads }) {
  const { emblaRef, emblaApi, buttons } = useCarouselButtons();

  return (
    <section className="hidden col-span-full max-md:grid">
      <div className="overflow-hidden mb-2" ref={emblaRef}>
        <div className="flex gap-3 touch-pan-y touch-pinch-zoom">
          {leads?.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>
      </div>
      <div className="relative flex gap-2 justify-between">
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
