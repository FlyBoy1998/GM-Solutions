import Skeleton from "../../skeleton/Skeleton";

export default function MediaSkeleton() {
  return (
    <>
      <div className="col-span-full flex justify-between items-center p-4 rounded-lg shadow-md bg-white max-md:flex-col max-md:gap-4">
        <div className="grid grid-cols-4 gap-4 max-md:w-full">
          <Skeleton className="min-w-56.5 min-h-11 col-span-2 max-md:col-span-full" />
          <Skeleton className="min-w-56.5 min-h-11 col-span-2 max-md:col-span-full" />
        </div>
        <Skeleton className="w-17.5 h-5" />
      </div>
      <div className="flex flex-col col-span-full row-start-3 row-end-4 p-3 rounded-lg shadow-lg bg-white">
        <div className="flex-1 grid grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton
              key={index}
              className="col-span-1 flex flex-col min-w-50 min-h-73.25 rounded-lg shadow-md"
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-auto py-4 border-t border-slate-200">
          <Skeleton className="min-w-82 min-h-10" />
        </div>
      </div>
      <Skeleton className="col-span-2 row-start-4 row-end-5 flex flex-col gap-4 min-h-83.5 py-3 px-4 rounded-lg shadow-md max-sm:col-span-full max-sm:row-start-5 max-sm:row-end-6" />
      <Skeleton className="col-span-2 row-start-4 row-end-5 flex flex-col gap-4 min-h-83.5 py-3 px-4 rounded-lg shadow-md max-sm:col-span-full" />
    </>
  );
}
