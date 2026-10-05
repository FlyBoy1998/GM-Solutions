export default function ServiceCard({ service }) {
  const imageUrl = service?.service_images.find(
    (image) => image.image_type === "thumbnail",
  ).storage_path;

  return (
    <div className="flex flex-col gap-4 p-3 rounded-md bg-light">
      <div className="rounded-md overflow-hidden">
        <img src={imageUrl} className="object-cover h-full w-full" alt="" />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1">{service?.name}</h3>
        <p className="text-sm">{service?.description}</p>
      </div>
    </div>
  );
}
