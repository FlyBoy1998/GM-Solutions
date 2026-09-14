export default function ProjectImagesGrid({ project }) {
  const images = project.carousel_images ?? [];

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {images.map((image) => (
          <button
            key={image.id}
            type="button"
            className="group aspect-4/3 overflow-hidden rounded-md"
          >
            <img
              src={image.storage_path}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
