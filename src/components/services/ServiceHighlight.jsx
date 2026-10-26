export default function ServiceHighlight({ item }) {
  return (
    <li className="flex flex-col">
      <div className="self-start mb-3 p-3 rounded-full bg-primary-transparent">
        {<item.icon className="text-white" />}
      </div>
      <h3 className="font-bold">{item.title}</h3>
      <p className="text-sm text-gray-dark">{item.description}</p>
    </li>
  );
}
