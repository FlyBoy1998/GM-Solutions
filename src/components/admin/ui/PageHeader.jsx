export default function PageHeader({ heading, description }) {
  return (
    <div className="col-span-full row-start-1 row-end-2">
      <h3 className="heading-md">{heading}</h3>
      <p className="text-gray-dark">{description}</p>
    </div>
  );
}
