import useCarouselButtons from "../../../hooks/useCarouselButtons";

import ProjectCard from "./ProjectCard";
import CarouselNextButton from "./CarouselNextButton";
import CarouselPrevButton from "./CarouselPrevButton";

export default function ProjectsCarousel({ projects }) {
  const { emblaRef, emblaApi, buttons } = useCarouselButtons();

  return (
    <section className="hidden col-span-full row-start-3 row-end-5 max-md:block">
      <div className="hidden relative max-w-full mx-auto max-md:block">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 touch-pan-y touch-pinch-zoom mb-2">
            {projects.map((project) => (
              <ProjectCard key={project?.id} project={project} />
            ))}
          </div>

          <div className="flex gap-2 max-sm:justify-between">
            <CarouselPrevButton
              onClick={() => emblaApi?.scrollPrev()}
              disabled={buttons.prev}
            />
            <CarouselNextButton
              onClick={() => emblaApi?.scrollNext()}
              disabled={buttons.next}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
