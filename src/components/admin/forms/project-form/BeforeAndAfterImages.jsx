import { Controller, useFormContext } from "react-hook-form";

import SectionHeader from "../../ui/SectionHeader";
import ImageUpload from "../../ui/ImageUpload";

export default function BeforeAndAfterImages() {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Before & After Images (Popup)"
        description="Add before and after images for the project popup."
      />
      <Controller
        name="before_image"
        control={control}
        rules={{ required: "Before image is required." }}
        render={({ field, fieldState }) => (
          <ImageUpload
            label="Before Image"
            id="popup-before-img"
            required
            onChange={field.onChange}
            errors={
              fieldState?.error && (
                <p className="input-error">{fieldState?.error.message}</p>
              )
            }
          />
        )}
      ></Controller>
      <Controller
        name="after_image"
        control={control}
        rules={{ required: "After image is required." }}
        render={({ field, fieldState }) => (
          <ImageUpload
            label="After Image"
            id="popup-after-img"
            required
            onChange={field.onChange}
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
