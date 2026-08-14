import CtaButton from "../../../components/ui/CtaButton";
import PageHeader from "../ui/PageHeader";
import ServiceCard from "./ServiceCard";
import TopServices from "./TopServices";
import ServicePerformanceOverview from "./ServicePerformanceOverview";

import { serviceCards } from "../../../constants/data";

export default function AdminServices() {
  return (
    <div className="grid grid-cols-3 grid-rows-[auto_1fr_auto] gap-4 h-full p-6">
      <div className="col-span-full flex justify-between items-center">
        <PageHeader
          heading="Services"
          description="Manage the renovation services displayed on your website."
        />
        <div>
          <CtaButton variant="primary">Add Service</CtaButton>
        </div>
      </div>
      <div className="col-span-full grid grid-cols-3 gap-3">
        {serviceCards.map((card) => (
          <ServiceCard
            key={card.description}
            imgUrl={card.icon}
            Icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <TopServices />
      <ServicePerformanceOverview />
    </div>
  );
}
