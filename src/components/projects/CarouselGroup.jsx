export default function CarouselGroup({ isAriaHidden = false, children }) {
  return (
    <div aria-hidden={isAriaHidden} className="carousel-group">
      {children}
    </div>
  );
}
