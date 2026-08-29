import SectionHeader from "../../ui/SectionHeader";
import CarouselImageUpload from "./CarouselImageUpload";

export default function ImagesCarousel() {
  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Image Carousel"
        description="Add multiple images to showcase the project."
      />
      <CarouselImageUpload />
    </div>
  );
}
