import SectionHeader from "../../ui/SectionHeader";
import ImageUpload from "../../ui/ImageUpload";

export default function ProjectImages() {
  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Project Images"
        description="Add the main images for the project."
      />
      <ImageUpload
        id="project-main-img"
        name="project_main_img"
        label="Project Thumbnail (Card Image)"
        required
      />
      <ImageUpload
        id="main-img"
        name="main_img"
        label="Project Details Main Image"
        required
      />
    </div>
  );
}
