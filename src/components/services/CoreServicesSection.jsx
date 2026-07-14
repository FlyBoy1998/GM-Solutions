import { serviceCards } from "../../constants/data";

import ServiceCard from "./ServiceCard";

export default function CoreServicesSection() {
  return (
    <section className="section">
      <h2 className="heading-md mb-4">Our Core Services</h2>
      <ul className="list-none grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {serviceCards.map((card) => (
          <ServiceCard
            key={card.description}
            title={card.title}
            description={card.description}
            imgUrl={card.imgUrl}
            Icon={card.icon}
          />
        ))}
      </ul>
    </section>
  );
}
