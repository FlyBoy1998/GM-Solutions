import { useLocation } from "react-router";
import { Dot } from "lucide-react";

import ProjectTableActions from "./ProjectsTableActions";

import { formatToCapitalize, formatDate } from "../../../utils/utils";

export default function ProjectsTableRow({ project }) {
  const location = useLocation();

  let formattedCategory;
  let projectStatusClasses =
    "inline-flex items-center pe-[12px] font-bold rounded-md";

  if (project.category.includes("-")) {
    formattedCategory = project.category.replace("-", " ");
  } else {
    formattedCategory = project.category;
  }

  if (project.status === "completed") {
    projectStatusClasses += " text-green-500 bg-green-100";
  } else if (project.status === "in progress") {
    projectStatusClasses += " text-blue-500 bg-blue-100";
  } else {
    projectStatusClasses += " text-orange-500 bg-orange-100";
  }

  return (
    <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
      <td className="projects-table-td whitespace-nowrap">
        <img
          src={project.imageUrl}
          className="object-cover h-12 rounded-lg max-w-none"
          alt={project.alt}
        />
      </td>
      <td className="projects-table-td">{project.title}</td>
      <td className="projects-table-td">
        {formatToCapitalize(formattedCategory)}
      </td>
      <td className="projects-table-td">{project.address}</td>
      <td className="projects-table-td rounded-md">
        <span className={projectStatusClasses}>
          <Dot aria-hidden />
          <span>{formatToCapitalize(project.status)}</span>
        </span>
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
