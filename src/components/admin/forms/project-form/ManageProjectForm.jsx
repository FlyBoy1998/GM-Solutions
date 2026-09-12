import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import PageHeader from "../../ui/PageHeader";
import CtaButton from "../../../ui/CtaButton";
import BasicInformation from "./BasicInformation";
import Location from "./Location";
import ProjectDetails from "./ProjectDetails";
import ProjectImages from "./ProjectImages";
import BeforeAndAfterImages from "./BeforeAndAfterImages";
import ImagesCarousel from "./ImagesCarousel";
import MaterialsUsed from "./MaterialsUsed";
import WorkCompleted from "./WorkCompleted";
import SeoAltText from "./SeoAltText";

import { createProject } from "../../../../api/api";

import useProject from "../../../../hooks/useProject";

export default function ManageProjectForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const abortControllerRef = useRef(null);

  const { projectId } = useParams();

  const isEditMode = Boolean(projectId);

  const {
    data: project,
    isLoading: isProjectLoading,
    error: projectLoadingError,
  } = useProject(projectId);

  const methods = useForm({
    defaultValues: {
      // Basic information
      title: "",
      category: "",
      address: "",
      description: "",

      // Project Images
      thumbnail_image: null,
      main_image: null,

      // Before & After Images
      before_image: null,
      after_image: null,

      // Location
      latitude: "",
      longitude: "",

      // Project Details
      completion_date: "",
      duration: "",
      project_size: "",
      budget_range: "",
      overview: "",

      // Carousel Images
      carousel_images: [],

      // Materials
      materials: [],

      // Work Completed
      work_completed: [],

      // Alt & SEO
      alt: "",
    },
  });

  useEffect(() => {
    if (projectLoadingError) {
      toast.error(projectLoadingError.message);
    }

    if (!project) return;

    methods.reset({
      // Basic information
      title: project.title ?? "",
      category: project.category ?? "",
      label: project.label ?? "",
      address: project.address ?? "",
      description: project.description ?? "",

      // Location
      latitude: project.latitude ?? "",
      longitude: project.longitude ?? "",

      // Project Details
      completion_date: project.completion_date ?? "",
      duration: project.duration ?? "",
      project_size: project.project_size ?? "",
      budget_range: project.budget_range ?? "",
      status: project.status ?? "",
      overview: project.overview ?? "",
      alt: project.alt ?? "",

      // Materials
      materials:
        project?.materials.map((item) => ({
          id: item.id,
          material: item.material,
        })) ?? [],

      // Work Completed
      work_completed:
        project?.work_completed.map((item) => ({
          id: item.id,
          description: item.description,
        })) ?? [],

      // Images
      thumbnail_image: project?.thumbnail_image ?? null,
      main_image: project?.main_image ?? null,

      before_image: project?.before_image ?? null,
      after_image: project?.after_image ?? null,

      carousel_images:
        project?.carousel_images.map((item) => ({
          preview: item.preview,
          name: item.file_name,
        })) ?? [],
    });
  }, [project, methods, projectLoadingError]);

  const { mutateAsync, isPending: isCreatingLoading } = useMutation({
    mutationFn: async (formData) => {
      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        return createProject(formData, controller.signal);
      } finally {
        abortControllerRef.current = null;
      }
    },
    onSuccess: () => {
      toast.success("Project successfully created!");
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      methods.reset();
    },
    onError: (err) => {
      if (err.name === "AbortError") {
        toast.error("Project creation cancelled.");
        return;
      }
      toast.error(err.message);
    },
  });

  const isLoading = isProjectLoading || isCreatingLoading;

  async function handleSubmit(data) {
    await mutateAsync(data);
  }

  return (
    <div className="flex flex-col gap-6 w-full p-6">
      <PageHeader
        heading="Add New Project"
        description="Fill in the details below to add a new project to your portfolio."
      >
        <div className="flex items-center gap-4 max-lg:hidden">
          <CtaButton
            variant="secondary"
            onClick={() => navigate(-1)}
            disabled={isLoading}
          >
            Cancel
          </CtaButton>
          <CtaButton
            variant="primary"
            form="project-form"
            type="submit"
            disabled={isLoading}
          >
            {isEditMode ? "Save Changes" : "Save Project"}
          </CtaButton>
        </div>
      </PageHeader>
      {isProjectLoading && <p>Loading project data...</p>}
      {!isProjectLoading && !projectLoadingError && (
        <FormProvider {...methods}>
          <form
            id="project-form"
            onSubmit={methods.handleSubmit(handleSubmit)}
            className="grid grid-cols-5 gap-6 items-start"
          >
            <div className="col-start-1 col-end-4 flex flex-col gap-6">
              <BasicInformation />
              <Location />
              <ProjectDetails />
              <MaterialsUsed />
              <WorkCompleted />
            </div>
            <div className="col-start-4 col-end-6 flex flex-col gap-6">
              <ProjectImages projectId={projectId} />
              <BeforeAndAfterImages projectId={projectId} />
              <ImagesCarousel />
              <SeoAltText />
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  );
}
