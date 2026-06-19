export default function MaterialsUsed({ project }) {
  return (
    <div>
      <h2 className="heading-sm font-bold mb-4">Materials used</h2>
      <ul className="flex flex-wrap gap-3">
        {project.materials.map((material) => (
          <li
            className="p-3 text-sm border border-primary rounded-full"
            key={material}
          >
            {material}
          </li>
        ))}
      </ul>
    </div>
  );
}
