import Skeleton from "../../skeleton/Skeleton";
import LeadsTableHead from "./LeadsTableHead";

export default function LeadsSkeleton() {
  return (
    <>
      <p className="sr-only" role="status">
        Loading data...
      </p>
      <div className="col-span-full row-start-2 row-end-5 grid grid-cols-subgrid grid-rows-subgrid gap-4">
        <div className="grid grid-cols-4 col-span-full gap-3 max-xl:grid-cols-2 max-sm:grid-cols-1">
          <Skeleton className="col-span-1 min-h-22 rounded-lg shadow-md" />
          <Skeleton className="col-span-1 min-h-22 rounded-lg shadow-md" />
          <Skeleton className="col-span-1 min-h-22 rounded-lg shadow-md" />
          <Skeleton className="col-span-1 min-h-22 rounded-lg shadow-md" />
        </div>
        <Skeleton className="col-span-full flex items-center min-h-19 p-4 rounded-lg shadow-md max-md:min-h-33.5" />
        <div className="col-span-full max-md:hidden">
          <table className="w-full text-sm border-separate border-spacing-y-5.5">
            <LeadsTableHead />
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td className="table-td">
                    <Skeleton className="min-h-10 min-w-19.25" />
                  </td>
                  <td className="table-td">
                    <Skeleton className="min-h-10 min-w-28.5" />
                  </td>
                  <td className="table-td">
                    <Skeleton className="min-h-10 min-w-14" />
                  </td>
                  <td className="table-td">
                    <Skeleton className="min-h-10 min-w-17.25" />
                  </td>
                  <td className="table-td">
                    <Skeleton className="min-h-10 min-w-22.75" />
                  </td>
                  <td className="table-td">
                    <Skeleton className="min-h-10 min-w-9.75" />
                  </td>
                  <td className="table-td">
                    <Skeleton className="min-h-10 min-w-20.5" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-span-full hidden max-md:block">
          <Skeleton className="h-87 w-full max-sm:h-111" />
        </div>
      </div>
    </>
  );
}
