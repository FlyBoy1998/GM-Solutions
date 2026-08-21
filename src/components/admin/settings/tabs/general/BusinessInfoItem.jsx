export default function BusinessInfoItem({ item }) {
  return (
    <div className="flex text-sm">
      <p className="flex-1">
        <item.icon className="inline text-primary" aria-hidden /> &nbsp;{" "}
        {item.label}
      </p>
      <p className="flex-1 text-gray-dark">{item.value}</p>
    </div>
  );
}
