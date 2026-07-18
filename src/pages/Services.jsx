import Main from "../layout/Main";
import ServiceHighlights from "../components/services/ServiceHighlights";
import CoreServicesSection from "../components/services/CoreServicesSection";
import CallToActionSection from "../components/ui/CallToActionSection";
import Footer from "../components/footer/Footer";

import { Folder } from "lucide-react";

import servicesMainImg from "../../public/images/services-main.jpg";

export default function Services() {
  return (
    <>
      <Main>
        <section className="section-pb grid grid-cols-[45%_1fr] gap-x-6 max-lg:grid-cols-1 max-lg:gap-y-6">
          <div className="col-span-1 flex flex-col">
            <p className="eyebrow">Our services</p>
            <h1 className="heading-lg flex-col mb-5 flex">
              <span>Built Around Your Vision.</span>
              <span>Crafted To Last.</span>
            </h1>
            <div className="accent-line"></div>
            <p className="leading-8 mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              reiciendis doloribus, atque eius est sapiente animi laboriosam
              libero non tempora. Vero dolorem dolore, sit ipsam quo molestiae
              provident labore esse debitis asperiores magni optio.
            </p>
            <ServiceHighlights />
          </div>
          <div className="relative self-center col-span-1 h-[85%] rounded-md overflow-hidden max-lg:h-full">
            <div className="absolute flex items-center gap-3 bottom-10 left-10 p-4 rounded-md bg-surface max-md:bottom-6 max-md:left-6 max-md:p-2">
              <Folder strokeWidth={3} className="text-primary" aria-hidden />
              <div>
                <p className="text-[1.6rem] font-semibold max-md:text-[1.2rem]">
                  100+
                </p>
                <p className="text-sm">Projects Completed</p>
              </div>
            </div>
            <img
              src={servicesMainImg}
              className="object-cover w-full h-full"
              alt="Modern kitchen renovation with white cabinetry and quartz countertops."
            />
          </div>
        </section>
        <CoreServicesSection />
        <CallToActionSection />
      </Main>
      <Footer />
    </>
  );
}
