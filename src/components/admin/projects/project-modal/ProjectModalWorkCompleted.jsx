import { CircleCheck } from "lucide-react";

export default function ProjectModalWorkCompleted({ workCompleted }) {
  return (
    <div>
      <h2 className="heading-xs">Work Completed</h2>
      <ul className="flex flex-col gap-2 py-2">
        {workCompleted?.map((item) => (
          <li key={item.id} className="flex items-center gap-4">
            <CircleCheck size={14} className="text-green-500" aria-hidden />
            <span className="text-xs text-gray-dark">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
