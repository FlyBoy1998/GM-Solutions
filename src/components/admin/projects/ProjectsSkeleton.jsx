import Skeleton from "../../skeleton/Skeleton";
import ProjectsTableHead from "../ui/ProjectsTableHead";

export default function ProjectsSkeleton() {
  return (
    <>
      <p className="sr-only">Loading projects data...</p>
      <div className="col-span-full row-start-2 row-end-5 grid grid-cols-subgrid gap-4">
        <Skeleton className="col-span-full min-h-19 max-xl:min-h-27 max-md:min-h-41.5 max-sm:min-h-56" />
        <div className="col-span-3 row-start-2 row-end-4 py-4 px-4 rounded-lg shadow-md bg-white max-xl:col-span-full max-md:hidden">
          <table className="w-full text-sm border-separate border-spacing-y-5.5">
            <ProjectsTableHead />

            <tbody>
              {Array.from({ length: 6 }).map((_, index) => (
                <tr key={index}>
                  <td className="table-td">
                    <Skeleton className="h-12 w-17.75" />
                  </td>
                  <td className="table-td">
                    <Skeleton className="min-h-12 min-w-32" />
                  </td>
                  <td className="table-td">
                    <Skeleton className="min-h-12 min-w-19.75" />
                  </td>
                  <td className="table-td">
                    <Skeleton className="min-h-12 min-w-24" />
                  </td>
                  <td className="table-td">
                    <Skeleton className="min-h-6 min-w-16.25" />
                  </td>
                  <td className="table-td">
                    <Skeleton className="min-h-6 min-w-14" />
                  </td>
                  <td className="table-td">
                    <Skeleton className="min-h-5.5 min-w-13" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="hidden col-span-full row-start-2 row-end-4 max-md:block">
          <Skeleton className="min-h-97.5" />
        </div>
        <div className="col-start-4 col-end-5 row-start-2 row-end-3 flex flex-col rounded-lg shadow-md max-xl:col-start-3 max-xl:col-end-5 max-xl:row-start-4 max-xl:row-end-5 max-sm:col-span-full">
          <Skeleton className="h-72.25 max-xl:h-59.5 max-sm:min-h-43.5" />
        </div>
        <div className="col-start-4 col-end-5 row-start-3 row-end-4 flex flex-col rounded-lg shadow-md max-xl:col-start-1 max-xl:col-end-3 max-xl:row-start-4 max-xl:row-end-5 max-sm:col-span-full max-sm:row-start-6 max-sm:row-end-7">
          <Skeleton className="h-72.5 max-xl:h-59.5 max-sm:min-h-59.5" />
        </div>
      </div>
    </>
  );
}
