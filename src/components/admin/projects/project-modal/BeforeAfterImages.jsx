export default function BeforeAfterImages({ project }) {
  const beforeImage = project?.project_images.find(
    (image) => image.image_type === "before",
  ).storage_path.publicUrl;
  const afterImage = project?.project_images.find(
    (image) => image.image_type === "after",
  ).storage_path.publicUrl;

  return (
    <div className="flex flex-col max-md:flex-1">
      <h2 className="heading-xs">Before & After</h2>
      <div className="flex gap-4 py-2">
        <figure>
          <figcaption className="mb-1 text-xs font-bold">Before</figcaption>
          <img
            src={beforeImage}
            className="w-full h-full object-cover rounded-md overflow-hidden"
            alt="Before Image"
          />
        </figure>
        <figure>
          <figcaption className="mb-1 text-xs font-bold">After</figcaption>
          <img
            src={afterImage}
            className="w-full h-full object-cover rounded-md overflow-hidden"
            alt="Before Image"
          />
        </figure>
      </div>
    </div>
  );
}
