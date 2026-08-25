export default function SectionHeader({ title, description }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h2 className="heading-xs font-body">{title}</h2>
      <p className="text-xs text-gray-dark">{description}</p>
    </div>
  );
}
