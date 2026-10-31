import { useNavigate } from "react-router";
import { RotateCcw, House } from "lucide-react";

import CtaButton from "./CtaButton";

export default function FetchErrorState({
  imageSrc,
  heading,
  description,
  hint = "Please check your internet connection and try again",
  onRetry,
  isRetrying,
}) {
  const navigate = useNavigate();

  return (
    <div className="nav-offset-height flex flex-col items-center">
      <div className="max-w-80 max-h-60 max-sm:max-w-46 max-sm:max-h-46">
        <img src={imageSrc} className="w-full h-full object-cover" alt="" />
      </div>
      <h2 className="heading-sm text-center mb-4">{heading}</h2>
      <div className="flex flex-col gap-1">
        <p className="text-center text-sm text-gray-dark">{description}</p>
        <p className="text-center text-sm text-gray-dark">{hint}</p>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <CtaButton
            variant="primary"
            Icon={RotateCcw}
            isFullWidth
            onClick={onRetry}
            disabled={isRetrying}
          >
            Try again
          </CtaButton>
        </div>
        <div>
          <CtaButton
            variant="secondary"
            Icon={House}
            isFullWidth
            onClick={() => navigate("/")}
            disabled={isRetrying}
          >
            Home
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
