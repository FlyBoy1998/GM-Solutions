export default function RecentLeadsPlaceholder({
  imageSrc,
  imageAlt,
  heading,
  description,
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-18 w-18">
        <img
          src={imageSrc}
          className="h-full w-full object-cover"
          alt={imageAlt}
        />
      </div>
      <h3 className="font-bold">{heading}</h3>
      <p className="text-center text-xs text-gray-dark">{description}</p>
    </div>
  );
}
