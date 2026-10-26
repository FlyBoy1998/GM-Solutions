import Skeleton from "../../skeleton/Skeleton";

export default function ServicesSkeleton() {
  return (
    <>
      <p className="sr-only" role="status">
        Loading services...
      </p>
      <div className="col-span-full grid grid-cols-3 gap-3">
        <Skeleton className="col-span-1 min-h-76.25 rounded-md max-xl:min-h-92.5 max-md:min-h-88.5 max-md:col-span-full" />
        <Skeleton className="col-span-1 min-h-76.25 rounded-md max-xl:min-h-92.5 max-md:min-h-88.5 max-md:col-span-full" />
        <Skeleton className="col-span-1 min-h-76.25 rounded-md max-xl:min-h-92.5 max-md:min-h-88.5 max-md:col-span-full" />
      </div>
      <Skeleton className="col-start-1 col-end-3 row-start-3 row-end-4 rounded-lg min-h-75.5 shadow-md max-lg:col-span-3 max-lg:min-h-112.75 max-md:col-span-full" />
      <Skeleton className="col-start-3 col-end-4 min-h-75.5 rounded-lg shadow-md max-lg:col-span-3 max-lg:min-h-112.75 max-md:min-h-71.5 max-md:col-span-full" />
    </>
  );
}
