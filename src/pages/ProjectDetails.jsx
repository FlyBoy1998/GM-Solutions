import { useParams, Link } from "react-router";
import { MapPin, Share2, ArrowLeft } from "lucide-react";

import PageNotFound from "./PageNotFound";
import NavbarOffset from "../layout/NavbarOffset";
import CtaButton from "../components/ui/CtaButton";
import ProjectCarousel from "../components/projects/ProjectCarousel";

import { projects } from "../../dummy_data/data";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((project) => project.id === +id);

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
      <NavbarOffset>
        <div className="grid grid-cols-[45%_1fr] gap-x-6">
          <div className="col-span-2">
            <Link
              to="/projects"
              className="cursor-pointer inline-flex items-center self-start gap-1 my-4 p-2 rounded-md text-primary hover:bg-primary-transparent hover:text-white focus-ring transition-all ease-out duration-400"
            >
              <ArrowLeft aria-hidden /> <span>Back to Projects</span>
            </Link>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-5 py-10">
            <p className="self-start bg-light-2 text-gray-dark py-2 px-3 rounded-md">
              {project.label}
            </p>
            <h1 className="heading-md">{project.title}</h1>
            <p className="flex items-center gap-1 text-gray-dark">
              <MapPin aria-hidden /> <span>{project.address}</span>
            </p>
            <p>{project.description}</p>
            <div>
              <CtaButton type="primary">
                Share Project{" "}
                <Share2 className="inline ms-1 mb-0.5" size={18} aria-hidden />
              </CtaButton>
            </div>
          </div>
          <div className="flex-2 rounded-md overflow-hidden">
            <img
              src={project.detailsBgImageUrl}
              className="object-cover h-full w-full"
              alt={project.alt}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </NavbarOffset>
      <div className="wrapper">
        <ProjectCarousel project={project} />
      </div>
    </>
  );
}
