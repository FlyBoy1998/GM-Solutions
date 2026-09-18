import { useState, useEffect } from "react";

export default function useMobileHeaderHeight() {
  const [mobileHeaderHeight, setMobileHeaderHeight] = useState(0);

  useEffect(() => {
    const mobileHeader = document?.getElementById("mobile-header");

    if (!mobileHeader) return;

    function updateHeight() {
      setMobileHeaderHeight(mobileHeader.offsetHeight);
    }
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(mobileHeader);

    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return { mobileHeaderHeight };
}
