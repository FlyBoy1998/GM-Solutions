export default function ProjectDescription({ project }) {
  return (
    <div className="mb-4">
      <h2 className="heading-sm font-bold mb-4">Project overview</h2>
      <p className="text-sm leading-8">{project.overview}</p>
    </div>
  );
}
