import { CircleCheck } from "lucide-react";

export default function WorkCompletedItem({ item }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <CircleCheck
        size={20}
        strokeWidth={3}
        className="text-primary"
        aria-hidden
      />
      <span>{item.description}</span>
    </li>
  );
}
