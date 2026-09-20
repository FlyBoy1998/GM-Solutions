import CtaButton from "../../../components/ui/CtaButton";
import PageHeader from "../ui/PageHeader";
import ServiceCard from "./ServiceCard";
import TopServices from "./TopServices";
import ServicePerformanceOverview from "./ServicePerformanceOverview";

import useServices from "../../../hooks/useServices";

export default function AdminServices() {
  const { data: services = [], isLoading, error } = useServices();

  return (
    <div className="grid grid-cols-3 grid-rows-[repeat(3,auto)] gap-4 p-6 overflow-y-auto max-lg:grid-cols-6">
      <PageHeader
        heading="Services"
        description="Manage the renovation services displayed on your website."
      >
        <div className="max-lg:hidden">
          <CtaButton variant="primary">Add Service</CtaButton>
        </div>
      </PageHeader>

      <div className="col-span-full grid grid-cols-3 gap-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <TopServices />
      <ServicePerformanceOverview />
    </div>
  );
}
