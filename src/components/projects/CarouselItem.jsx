export default function CarouselItem({ imgSrc, imgAlt }) {
  return (
    <div className="grow-0 shrink-0 basis-[15em] h-[15em] p-4 rounded-md overflow-hidden">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="object-cover w-full h-full scale-125"
        loading="lazy"
        draggable="false"
        decoding="async"
      />
    </div>
  );
}
