import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function useCarouselButtons() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    inViewThreshold: 0.5,
  });

  const [buttons, setButtons] = useState({
    prev: true,
    next: false,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = (api) => {
      setButtons({
        prev: !api.canScrollPrev(),
        next: !api.canScrollNext(),
      });
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return { emblaRef, emblaApi, buttons };
}
