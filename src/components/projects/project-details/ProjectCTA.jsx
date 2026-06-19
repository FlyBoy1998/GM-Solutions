import CtaButton from "../../ui/CtaButton";

import { MessageSquareQuote, ArrowRight } from "lucide-react";

export default function ProjectCTA() {
  return (
    <div className="wrapper">
      <div className="flex items-center justify-between py-8 px-16 rounded-md bg-light-1">
        <p className="flex items-center gap-3">
          <span className="flex items-center justify-center w-20 h-20 rounded-full bg-primary-transparent">
            <MessageSquareQuote size={30} className="text-white" aria-hidden />
          </span>
          <span className="text-xl font-bold">
            Ready to start your renovation?
          </span>
        </p>
        <CtaButton type="primary">
          Get your free quote{" "}
          <ArrowRight size={20} className="inline-block" aria-hidden />
        </CtaButton>
      </div>
    </div>
  );
}
