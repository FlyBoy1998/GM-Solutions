import { CircleCheck } from "lucide-react";

export default function WorkCompletedList({ project }) {
  return (
    <div>
      <h2 className="heading-sm font-bold mb-4">What we did</h2>
      <ul className="space-y-6">
        {project.workCompleted.map((item) => (
          <li className="flex items-start gap-2 text-sm" key={item}>
            <CircleCheck
              size={20}
              strokeWidth={3}
              className="text-primary"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
