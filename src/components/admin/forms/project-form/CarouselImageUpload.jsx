import { useRef, useState } from "react";
import { Plus } from "lucide-react";

import AddItemButton from "../../ui/AddItemButton";
import CarouselImageItem from "./CarouselImageItem";

export default function CarouselImageUpload() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const inputRef = useRef(null);

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
    setUploadedImages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        imageName: file.name,
        imageUrl,
        alt: "",
      },
    ]);
  }

  function handleDeleteImage(id) {
    setUploadedImages((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        {uploadedImages.length === 0 ? (
          <p className="py-4 text-center text-sm text-gray-dark">
            No uploaded images.
          </p>
        ) : (
          uploadedImages.map((item) => (
            <CarouselImageItem
              key={item.imageUrl}
              item={item}
              onClick={() => handleDeleteImage(item.id)}
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
        name="image"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={handleUploadImage}
      />
    </div>
  );
}
