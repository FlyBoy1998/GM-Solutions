export default function ContactInfoItem({ Icon, title, primary, secondary }) {
  return (
    <div className="flex gap-4 rounded-lg shadow-sm">
      <div className="flex justify-center items-center h-20 w-20 rounded-lg bg-primary-transparent">
        <Icon size={32} className="text-white" aria-hidden />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-dark">{primary}</p>
        <p className="text-sm text-gray-dark">{secondary}</p>
      </div>
    </div>
  );
}
