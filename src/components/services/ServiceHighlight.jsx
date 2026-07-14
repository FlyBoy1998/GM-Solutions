export default function ServiceHighlight({ Icon, title, description }) {
  return (
    <li className="flex flex-col">
      <div className="self-start mb-3 p-3 rounded-full bg-primary-transparent">
        {<Icon className="text-white" />}
      </div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-dark">{description}</p>
    </li>
  );
}
