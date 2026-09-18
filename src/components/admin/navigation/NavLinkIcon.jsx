export default function NavLinkIcon({ Icon, className }) {
  let classes = className + " p-3 rounded-full ";

  return <Icon size={42} strokeWidth={3} className={classes} aria-hidden />;
}
