import CarouselGroup from "./CarouselGroup";
import CarouselItem from "./CarouselItem";

export default function ProjectCarousel({ project }) {
  const images = project.carousel_images ?? [];

  if (!images.length) return null;

  return (
    <div className="wrapper">
      <div className="carousel section col-span-2 flex w-full overflow-hidden rounded-md">
        <CarouselGroup>
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              imgSrc={image.storage_path}
              imgAlt={image.alt}
            />
          ))}
        </CarouselGroup>
        <CarouselGroup isAriaHidden>
          {images.map((image) => (
            <CarouselItem
              key={`duplicate-${image.id}`}
              imgSrc={image.storage_path}
              imgAlt={image.alt}
            />
          ))}
        </CarouselGroup>
      </div>
    </div>
  );
}
