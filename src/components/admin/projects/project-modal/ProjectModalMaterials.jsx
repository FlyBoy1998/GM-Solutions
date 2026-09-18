export default function ProjectModalMaterials({ materials }) {
  return (
    <div>
      <h2 className="heading-xs">Materials</h2>
      <div className="inline-flex flex-wrap items-center gap-3 py-2">
        {materials?.map((item) => (
          <span
            key={item.id}
            className="p-2 text-xs rounded-md font-bold text-primary bg-orange-50"
          >
            {item.material}
          </span>
        ))}
      </div>
    </div>
  );
}
