export default function Skeleton({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray ${className}`}
      aria-hidden
    ></div>
  );
}
