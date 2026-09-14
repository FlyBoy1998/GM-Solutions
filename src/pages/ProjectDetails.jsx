import { useParams, Link } from "react-router";

import Main from "../layout/Main";

import { MapPin, Share2, ArrowLeft } from "lucide-react";

import PageNotFound from "./PageNotFound";
import ProjectMeta from "../components/projects/project-details/ProjectMeta";
import CtaButton from "../components/ui/CtaButton";
import ProjectCarousel from "../components/projects/project-details/ProjectCarousel";
import ProjectImagesGrid from "../components/projects/project-details/ProjectImagesGrid";
import ProjectOverviewSection from "../components/projects/project-details/ProjectOverviewSection";
import CallToActionSection from "../components/ui/CallToActionSection";
import Footer from "../components/footer/Footer";

import useProject from "../hooks/useProject";

export default function ProjectDetails() {
  const { projectId } = useParams();

  const { data: project = [], isLoading, error } = useProject(projectId);

  const carouselImagesLength = project?.carousel_images?.length;

  if (!project) {
    return (
      <PageNotFound
        title="Project not found"
        backTo="/projects"
        backLabel="Back to Projects"
        description="The project you are looking for may have been removed, renamed, or is not available."
      />
    );
  }

  return (
    <>
      <Main>
        <section className="section-pb">
          <div className="grid grid-cols-[45%_1fr] gap-x-6 max-lg:grid-cols-1">
            <div className="col-span-2 max-lg:col-span-full">
              <Link
                to="/projects"
                className="cursor-pointer inline-flex items-center self-start gap-1 my-2 p-2 rounded-md text-primary hover:bg-primary-transparent hover:text-white focus-ring transition-all ease-out duration-400"
              >
                <ArrowLeft aria-hidden /> <span>Back to Projects</span>
              </Link>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-6 py-8 max-lg:col-span-full">
              <p className="self-start py-2 px-3 rounded-md text-sm bg-light text-gray-dark">
                {project.label}
              </p>
              <h1 className="heading-sm font-bold">{project.title}</h1>
              <p className="flex items-center gap-1 text-sm text-gray-dark">
                <MapPin aria-hidden /> <span>{project.address}</span>
              </p>
              <p className="text-sm leading-7">{project.description}</p>
              <ProjectMeta project={project} />
              <div>
                <CtaButton variant="primary">
                  Share Project{" "}
                  <Share2
                    className="inline ms-1 mb-0.5"
                    size={18}
                    aria-hidden
                  />
                </CtaButton>
              </div>
            </div>
            <div className="flex-2 rounded-md overflow-hidden max-lg:col-span-full">
              <img
                src={project.main_image?.storage_path}
                className="object-cover h-full w-full"
                alt={project.alt}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </section>
        {carouselImagesLength < 8 ? (
          <ProjectImagesGrid project={project} />
        ) : (
          <ProjectCarousel project={project} />
        )}
        <ProjectOverviewSection project={project} />
        <CallToActionSection />
      </Main>
      <Footer />
    </>
  );
}
