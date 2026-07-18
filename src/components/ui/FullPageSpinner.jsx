import { RotatingLines } from "react-loader-spinner";

export default function FullPageSpinner() {
  return (
    <div className="flex justify-center items-center h-full bg-surface z-100000">
      <RotatingLines
        height={96}
        width={96}
        color="var(--color-primary)"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
