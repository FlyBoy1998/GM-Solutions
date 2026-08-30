import { useFormContext, Controller } from "react-hook-form";

import SectionHeader from "../../ui/SectionHeader";
import ImageUpload from "../../ui/ImageUpload";

export default function ProjectImages() {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Project Images"
        description="Add the main images for the project."
      />
      <Controller
        name="thumbnail_image"
        control={control}
        rules={{ required: "Project thumbnail is required." }}
        render={({ field, fieldState }) => (
          <ImageUpload
            label="Project Thumbnail (Card Image)"
            id="thumbnail-image"
            onChange={field.onChange}
            required
            errors={
              fieldState?.error && (
                <p className="input-error">{fieldState?.error.message}</p>
              )
            }
          />
        )}
      ></Controller>
      <Controller
        name="main_img"
        control={control}
        rules={{ required: "Main image is required." }}
        render={({ field, fieldState }) => (
          <ImageUpload
            label="Project Details Main Image"
            id="main-img"
            onChange={field.onChange}
            required
            errors={
              fieldState?.error && (
                <p className="input-error">{fieldState?.error.message}</p>
              )
            }
          />
        )}
      ></Controller>
    </div>
  );
}
