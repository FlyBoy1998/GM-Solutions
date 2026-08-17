import LeadsTableHead from "./LeadsTableHead";
import LeadsTableRow from "./LeadsTableRow";

export default function LeadsTable({ leads }) {
  return (
    <table className="w-full text-sm border-separate border-spacing-y-5.5">
      <LeadsTableHead />

      <tbody className="text-xs">
        {leads.map((lead) => (
          <LeadsTableRow key={lead.id} lead={lead} />
        ))}
      </tbody>
    </table>
  );
}
