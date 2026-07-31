export default function ServiceCardButton({ Icon, children, ...props }) {
  return (
    <button className="service-card-btn" {...props}>
      <Icon size={16} aria-hidden />
      <span>{children}</span>
    </button>
  );
}
