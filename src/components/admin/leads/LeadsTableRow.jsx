import TableActions from "../ui/TableActions";

import { formatDate, formatTime } from "../../../utils/utils";

export default function LeadsTableRow({ lead }) {
  return (
    <tr className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
      <td className="table-td">
        <p className="mb-1 font-bold">{lead.name}</p>
        <p className="text-gray-dark">{lead.projectType}</p>
      </td>
      <td className="table-td">
        <p className="mb-1">{lead.email}</p>
        <p className="text-gray-dark">{lead.phone}</p>
      </td>
      <td className="table-td">{lead.source}</td>
      <td className="table-td">{lead.status}</td>
      <td className="table-td">
        <p className="max-w-60 line-clamp-2 leading-5">{lead.enquiry}</p>
      </td>
      <td className="table-td">
        <p className="mb-1">{formatDate(lead.createdAt.split("T")[0])}</p>
        <p className="text-gray-dark">
          {formatTime(lead.createdAt.split("T")[1])}
        </p>
      </td>

      <TableActions hasDeleteAction />
    </tr>
  );
}
