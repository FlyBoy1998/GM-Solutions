export default function MaintenanceBenefitItem({ icon: Icon, title }) {
  return (
    <div className="flex justify-center items-center gap-2 py-2 px-4 rounded-md border-2 border-primary-light">
      <Icon size={20} strokeWidth={2} className="text-primary" aria-hidden />
      <p className="font-bold text-black max-sm:text-sm">{title}</p>
    </div>
  );
}
