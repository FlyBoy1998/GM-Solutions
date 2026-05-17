export default function StatItem({ label, value, Icon }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2">
      <div>
        <Icon size={32} color="var(--color-primary)" strokeWidth={2} />
      </div>
      <div>
        <p className="font-bold text-lg">{value}</p>
        <p className="text-gray-dark">{label}</p>
      </div>
    </div>
  );
}
