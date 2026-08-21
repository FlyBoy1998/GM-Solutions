import CtaButton from "../../../components/ui/CtaButton";
import PageHeader from "../ui/PageHeader";
import ServiceCard from "./ServiceCard";
import TopServices from "./TopServices";
import ServicePerformanceOverview from "./ServicePerformanceOverview";

import { serviceCards } from "../../../constants/data";

export default function AdminServices() {
  return (
    <div className="grid grid-cols-3 grid-rows-[repeat(3,auto)] gap-4 p-6 overflow-y-auto">
      <PageHeader
        heading="Services"
        description="Manage the renovation services displayed on your website."
      >
        <div className="max-lg:hidden">
          <CtaButton variant="primary">Add Service</CtaButton>
        </div>
      </PageHeader>

      <div className="col-span-full grid grid-cols-3 gap-3">
        {serviceCards.map((card) => (
          <ServiceCard key={card.description} card={card} />
        ))}
      </div>
      <TopServices />
      <ServicePerformanceOverview />
    </div>
  );
}
