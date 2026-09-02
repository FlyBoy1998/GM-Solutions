import { useRef } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Plus } from "lucide-react";

import AddItemButton from "../../ui/AddItemButton";
import CarouselImageItem from "./CarouselImageItem";

export default function CarouselImageUpload() {
  const inputRef = useRef(null);

  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "carousel_images",
  });

  function handleClick() {
    inputRef?.current?.click();
  }

  function handleUploadImage(e) {
    const file = e.target?.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("The file format is incorrect.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image file must be smaller than 5MB.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    append({
      file,
      preview: imageUrl,
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        {fields.length === 0 ? (
          <p className="py-4 text-center text-sm text-gray-dark">
            No uploaded images.
          </p>
        ) : (
          fields.map((item, index) => (
            <CarouselImageItem
              key={item.id}
              item={item}
              onClick={() => remove(index)}
            />
          ))
        )}
      </div>
      <AddItemButton Icon={Plus} onClick={handleClick}>
        Add Image
      </AddItemButton>
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={handleUploadImage}
      />
    </div>
  );
}
