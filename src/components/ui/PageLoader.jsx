export default function PageLoader({
  imageSrc,
  message = "Loading...",
  className = "",
}) {
  return (
    <div className={`nav-offset-height flex justify-center ${className}`}>
      <div className="max-w-4xl">
        <p className="sr-only" role="status">
          {message}
        </p>
        <img src={imageSrc} className="w-full object-cover" alt="" />
      </div>
    </div>
  );
}
