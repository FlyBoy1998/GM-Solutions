import { useEffect, useState } from "react";

export default function NavbarOffset({
  children,
  isFullScreen,
  flexDirection = "row",
  additionalStyling = "",
}) {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const nav = document.getElementById("main-nav");
    if (!nav) return;

    const updateHeight = () => {
      setNavHeight(nav.offsetHeight);
    };
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(nav);

    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <section
      style={{ "--nav-height": `${navHeight}px` }}
      className={`wrapper flex flex-${flexDirection} pt-(--nav-height) ${isFullScreen ? "min-h-screen" : ""} ${additionalStyling}`}
    >
      {children}
    </section>
  );
}
