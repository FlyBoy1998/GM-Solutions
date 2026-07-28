import { useLocation } from "react-router";

import ProjectTableActions from "../dashboard/ProjectsTableActions";

import { formatToCapitalize, formatDate } from "../../../utils/utils";

export default function ProjectsTableRow({ project }) {
  const location = useLocation();

  let formattedCategory;

  if (project.category.includes("-")) {
    formattedCategory = project.category.replace("-", " ");
  } else {
    formattedCategory = project.category;
  }

  return (
    <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
      <td className="h-12 projects-table-td">
        <img
          src={project.imageUrl}
          className="object-cover w-full h-full rounded-lg"
          alt={project.alt}
        />
      </td>
      <td className="projects-table-td">{project.title}</td>
      <td className="projects-table-td">
        {formatToCapitalize(formattedCategory)}
      </td>
      <td className="projects-table-td">{project.address}</td>
      <td className="projects-table-td">
        {formatToCapitalize(project.status)}
      </td>
      <td className="projects-table-td">
        {formatDate(project.completionDate)}
      </td>
      <ProjectTableActions
        hasDeleteAction={location.pathname.includes("/admin/projects")}
      />
    </tr>
  );
}
