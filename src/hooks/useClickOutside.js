import { useEffect } from "react";

export default function useClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(e) {
      if (!ref.current || ref.current.contains(e.target)) return;

      callback();
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
