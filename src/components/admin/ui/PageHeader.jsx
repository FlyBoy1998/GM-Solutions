export default function PageHeader({ heading, description, children }) {
  return (
    <div className="col-span-full flex justify-between items-center max-md:flex-col max-md:items-start max-md:gap-4">
      <div className="flex flex-col gap-1.5">
        <h3 className="heading-md">{heading}</h3>
        <p className="text-gray-dark w-[80%] max-md:text-xs">{description}</p>
      </div>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
}
