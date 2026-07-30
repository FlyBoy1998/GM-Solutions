export default function ProjectsCategoriesItem({ Icon, projectType, value }) {
  return (
    <div className="flex justify-between text-sm">
      <p className="flex items-center gap-2">
        <Icon className="text-primary" aria-hidden />
        <span className="font-bold text-gray-dark">{projectType}</span>
      </p>
      <p className="font-bold">{value}</p>
    </div>
  );
}
