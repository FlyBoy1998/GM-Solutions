import { Phone, Mail } from "lucide-react";

export default function FooterContact() {
  return (
    <div className="flex-1">
      <h3 className="mb-4 font-bold text-white">Contact Us</h3>
      <ul className="list-none flex flex-col gap-3 text-white">
        <li className="flex items-center gap-2">
          <Phone /> <span>(024) 345-4674</span>
        </li>
        <li className="flex items-center gap-2">
          <Mail /> <span>test@mail.com</span>
        </li>
      </ul>
    </div>
  );
}
