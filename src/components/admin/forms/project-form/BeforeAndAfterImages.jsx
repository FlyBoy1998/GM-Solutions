import SectionHeader from "../../ui/SectionHeader";
import ImageUpload from "../../ui/ImageUpload";

export default function BeforeAndAfterImages() {
  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Before & After Images (Popup)"
        description="Add before and after images for the project popup."
      />
      <ImageUpload
        label="Before Image"
        id="popup-before-img"
        name="popup_before_img"
        required
      />
      <ImageUpload
        label="After Image"
        id="popup-after-img"
        name="popup_after_img"
        required
      />
    </div>
  );
}
