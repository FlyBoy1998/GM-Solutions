import { Menu, X } from "lucide-react";

export default function HamburgerBtn({ isOpen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="cursor-pointer block lg:hidden w-10 h-10 border-none text-white focus-ring"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
    >
      <span className={`hamburger-inner ${isOpen ? "rotate-y-180" : ""}`}>
        <span className="hamburger-face rotate-y-180 ">
          <X aria-hidden />
        </span>
        <span className="hamburger-face">
          <Menu aria-hidden />
        </span>
      </span>
    </button>
  );
}
