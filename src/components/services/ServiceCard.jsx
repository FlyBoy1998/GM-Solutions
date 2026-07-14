export default function ServiceCard({
  imgUrl,
  imgAlt,
  Icon,
  title,
  description,
}) {
  return (
    <div className="flex flex-col gap-4 h-52 p-3 rounded-md bg-light max-xl:h-64 max-lg:h-52">
      <div className="relative h-[50%] rounded-md overflow-hidden">
        <Icon
          className="absolute bottom-2 left-2 p-2 rounded-md text-white bg-primary"
          size={40}
          aria-hidden
        />
        <img src={imgUrl} className="object-cover h-full w-full" alt={imgAlt} />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
