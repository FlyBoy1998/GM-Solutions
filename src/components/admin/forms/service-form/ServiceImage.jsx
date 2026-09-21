import { useFormContext, Controller } from "react-hook-form";

import ImageUpload from "../../ui/ImageUpload";
import SectionHeader from "../../ui/SectionHeader";

import useService from "../../../../hooks/useService";

export default function ServiceImage({ serviceId }) {
  const { control } = useFormContext();

  const { data: service } = useService(serviceId);

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Service Images"
        description="Add images to showcase this service."
      />
      <Controller
        name="thumbnail_image"
        control={control}
        rules={{ required: "Service thumbnail image is required." }}
        render={({ field, fieldState }) => (
          <ImageUpload
            initialImage={service?.thumbnail_image?.url}
            label="Thumbnail Image"
            id="service-thumbnail-image"
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
