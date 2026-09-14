import DeleteItemButton from "../../ui/DeleteItemButton";

export default function CarouselImageItem({ item, onClick }) {
  const imgSrc = item.preview ?? item.storage_path;

  return (
    <div className="flex items-center justify-between p-1 rounded-md border border-gray-dark">
      <div className="flex items-center gap-2">
        <div className="h-8 w-12 rounded-md overflow-hidden">
          <img
            src={imgSrc}
            className="object-cover h-full w-full"
            alt={item.name ?? "Carousel image"}
          />
        </div>
        <div className="text-xs text-gray-dark">{item.name}</div>
      </div>
      <DeleteItemButton onClick={onClick} aria-label="Delete Carousel Image" />
    </div>
  );
}
