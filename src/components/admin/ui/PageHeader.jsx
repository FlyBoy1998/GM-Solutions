export default function PageHeader({ heading, description }) {
  return (
    <div>
      <h3 className="heading-md">{heading}</h3>
      <p className="text-gray-dark">{description}</p>
    </div>
  );
}
