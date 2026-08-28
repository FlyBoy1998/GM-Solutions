import { useRef, useState } from "react";
import { Upload } from "lucide-react";

export default function ImageUpload({
  label,
  initialImage = null,
  required = false,
  onChange,
  id,
  name,
}) {
  const [preview, setPreview] = useState(initialImage);
  const inputRef = useRef(null);

  function handleClick() {
    inputRef?.current.click();
  }

  function handleFileChange(e) {
    const file = e.target?.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be smaller than 5MB.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);

    onChange?.(file);
  }

  return (
    <div>
      <label htmlFor={id} className="text-sm mb-1 font-bold">
        {label} {required ? <span className="text-red-500">*</span> : ""}
      </label>

      <div className="grid grid-cols-2 gap-4">
        {preview ? (
          <div>
            <img
              src={preview}
              className="object-cover h-full w-full"
              alt="Preview"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center h-full text-gray-dark">
            No image selected
          </div>
        )}

        <button
          type="button"
          className="cursor-pointer flex flex-col items-center justify-center gap-3 aspect-square border border-dashed rounded-md transition hover:bg-gray-50"
          onClick={handleClick}
        >
          <Upload size={24} aria-hidden />
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-bold">Click to upload</p>
            <p className="text-sm text-gray-dark">PNG, JPG up to 5MB</p>
          </div>
        </button>

        <input
          ref={inputRef}
          type="file"
          id={id}
          name={name}
          accept="image/png,image/jpeg,image/webp"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
