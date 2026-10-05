import useServices from "../../hooks/useServices";

import ServiceCard from "./ServiceCard";

export default function CoreServicesSection() {
  const { data: services = [], isLoading, error } = useServices();

  const visibleServices = services?.filter((service) => service.is_visible);

  return (
    <section className="section">
      <h2 className="heading-md mb-4">Our Core Services</h2>
      <ul className="list-none grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {visibleServices?.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ul>
    </section>
  );
}
