import { Phone, Mail } from "lucide-react";

export default function FooterContact() {
  return (
    <div className="flex-1">
      <h3 className="mb-4 font-bold text-white">Contact Us</h3>
      <ul className="list-none flex flex-col gap-2 text-white">
        <li className="flex items-center gap-2">
          <Phone size={16} aria-hidden />{" "}
          <span className="text-sm">(024) 345-4674</span>
        </li>
        <li className="flex items-center gap-2">
          <Mail size={16} aria-hidden />{" "}
          <span className="text-sm">test@mail.com</span>
        </li>
      </ul>
    </div>
  );
}
