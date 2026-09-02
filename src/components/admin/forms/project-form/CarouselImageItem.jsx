import DeleteItemButton from "../../ui/DeleteItemButton";

export default function CarouselImageItem({ item, onClick }) {
  return (
    <div className="flex items-center justify-between p-1 rounded-md border border-gray-dark">
      <div className="flex items-center gap-2">
        <div className="h-8 w-12 rounded-md overflow-hidden">
          <img
            src={item.preview}
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
        <div className="text-xs text-gray-dark">{item.file.name}</div>
      </div>
      <DeleteItemButton onClick={onClick} aria-label="Delete Carousel Image" />
    </div>
  );
}
