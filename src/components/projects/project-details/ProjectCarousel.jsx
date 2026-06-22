import CarouselGroup from "./CarouselGroup";
import CarouselItem from "./CarouselItem";

export default function ProjectCarousel({ project }) {
  const images = project.carouselImages ?? [];

  if (!images.length) return null;

  return (
    <div className="wrapper">
      <div className="carousel col-span-2 flex w-full overflow-hidden py-10 rounded-md">
        <CarouselGroup>
          {images.map((img) => (
            <CarouselItem key={img.src} imgSrc={img.src} imgAlt={img.alt} />
          ))}
        </CarouselGroup>
        <CarouselGroup isAriaHidden>
          {images.map((img) => (
            <CarouselItem
              key={`duplicate-${img.src}`}
              imgSrc={img.src}
              imgAlt=""
            />
          ))}
        </CarouselGroup>
      </div>
    </div>
  );
}
