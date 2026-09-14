import WorkCompletedItem from "./WorkCompletedItem";

export default function WorkCompletedList({ project }) {
  return (
    <div>
      <h2 className="heading-sm font-bold mb-4">What we did</h2>
      <ul className="space-y-6">
        {project?.work_completed?.map((item) => (
          <WorkCompletedItem key={item.description} item={item} />
        ))}
      </ul>
    </div>
  );
}
