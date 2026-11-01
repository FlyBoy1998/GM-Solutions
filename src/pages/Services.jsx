import servicesMainImg from "../../public/images/services-main.jpg";
import servicesPageLoader from "../../public/images/services-page-loader.gif";
import servicesFetchErrorImage from "../../public/images/services-fetch-error-image.png";

import { Folder } from "lucide-react";
import useServices from "../hooks/useServices";

import Main from "../layout/Main";
import ServiceHighlights from "../components/services/ServiceHighlights";
import CoreServicesSection from "../components/services/CoreServicesSection";
import CallToActionSection from "../components/ui/CallToActionSection";
import Footer from "../components/footer/Footer";
import PageLoader from "../components/ui/PageLoader";
import FetchErrorState from "../components/ui/FetchErrorState";

export default function Services() {
  const {
    data: services = [],
    isLoading,
    error,
    refetch,
    isFetching,
  } = useServices();

  return (
    <>
      <Main>
        {isLoading ? (
          <PageLoader
            imageSrc={servicesPageLoader}
            message="Loading servicess"
            className="items-center"
          />
        ) : !isLoading && error ? (
          <FetchErrorState
            imageSrc={servicesFetchErrorImage}
            heading="We couldn't load services"
            description="We're having trouble fetching services right now."
            onRetry={() => refetch()}
            isRetrying={isFetching}
          />
        ) : (
          <>
            <section className="section-pb grid grid-cols-[45%_1fr] gap-x-6 max-lg:grid-cols-1 max-lg:gap-y-6">
              <div className="col-span-1 flex flex-col">
                <p className="eyebrow">Our services</p>
                <h1 className="heading-lg flex-col mb-5 flex">
                  <span>Built Around Your Vision.</span>
                  <span>Crafted To Last.</span>
                </h1>
                <div className="accent-line"></div>
                <p className="leading-8 mb-6">
                  Whether you're updating a single room or reimagining your
                  entire home, we deliver renovation solutions tailored to your
                  property and priorities. From the initial planning and
                  material selection to the finishing touches, we focus on
                  thoughtful details, quality craftsmanship, and results built
                  for everyday living.
                </p>
                <ServiceHighlights />
              </div>
              <div className="relative self-center col-span-1 h-[85%] rounded-md overflow-hidden max-lg:h-full">
                <div className="absolute flex items-center gap-3 bottom-10 left-10 p-4 rounded-md bg-surface max-md:bottom-6 max-md:left-6 max-md:p-2">
                  <Folder
                    strokeWidth={3}
                    className="text-primary"
                    aria-hidden
                  />
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
            <CoreServicesSection services={services} />
            <CallToActionSection />
          </>
        )}
      </Main>
      <Footer />
    </>
  );
}
