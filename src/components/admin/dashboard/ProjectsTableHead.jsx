export default function ProjectsTableHead() {
  return (
    <thead className="font-bold text-gray-dark">
      <tr>
        <th>&nbsp;</th>
        <th className="projects-table-th">Project</th>
        <th className="projects-table-th">Category</th>
        <th className="projects-table-th">Location</th>
        <th className="projects-table-th">Status</th>
        <th className="projects-table-th">Date</th>
        <th className="projects-table-th px-0">Actions</th>
      </tr>
    </thead>
  );
}
