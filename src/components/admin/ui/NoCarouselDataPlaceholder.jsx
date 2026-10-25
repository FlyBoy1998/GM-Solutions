import { useNavigate } from "react-router";

import CtaButton from "../../ui/CtaButton";

export default function NoCarouselDataPlaceholder({
  imageSrc,
  heading,
  description,
  secondaryDescription,
  buttonText = "",
  navigateTo,
}) {
  const navigate = useNavigate();

  return (
    <div className="col-span-full hidden flex-col justify-center items-center p-3 rounded-md shadow-lg bg-white max-md:flex">
      <div className="h-40 w-60">
        <img src={imageSrc} className="h-full w-full object-cover" alt="" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h3 className="heading-sm">{heading}</h3>
        <p className="text-center text-sm text-gray-dark">{description}</p>
        <p className="text-center text-sm text-gray-dark mb-4">
          {secondaryDescription}
        </p>
        {buttonText && (
          <CtaButton
            variant="primary"
            size="small"
            onClick={() => navigate(navigateTo)}
          >
            {buttonText}
          </CtaButton>
        )}
      </div>
    </div>
  );
}
