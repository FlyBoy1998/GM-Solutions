export default function DataFetchError({
  imageSrc,
  heading,
  description,
  secondaryDescription,
}) {
  return (
    <div className="flex flex-col justify-center items-center py-4 px-4 rounded-lg bg-white">
      <div className="w-54 h-54 max-sm:w-46 max-sm:h-46">
        <img src={imageSrc} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h2 className="heading-sm">{heading}</h2>
        <p className="text-center text-sm text-gray-dark">{description}</p>
        <p className="text-center text-sm text-gray-dark mb-4">
          {secondaryDescription}
        </p>
      </div>
    </div>
  );
}
