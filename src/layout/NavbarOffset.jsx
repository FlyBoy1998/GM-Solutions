import { useEffect, useState } from "react";

export default function NavbarOffset({ children }) {
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
    <div
      style={{ "--nav-height": `${navHeight}px` }}
      className={`flex flex-col min-h-screen pt-(--nav-height)`}
    >
      {children}
    </div>
  );
}
