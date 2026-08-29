import { useNavigate } from "react-router";

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

export default function ManageProjectForm() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 w-full p-6">
      <PageHeader
        heading="Add New Project"
        description="Fill in the details below to add a new project to your portfolio."
      >
        <div className="flex items-center gap-4 max-lg:hidden">
          <CtaButton variant="secondary" onClick={() => navigate(-1)}>
            Cancel
          </CtaButton>
          <CtaButton variant="primary">Save Project</CtaButton>
        </div>
      </PageHeader>
      <form action="" className="grid grid-cols-5 gap-6 items-start">
        <div className="col-start-1 col-end-4 flex flex-col gap-6">
          <BasicInformation />
          <Location />
          <ProjectDetails />
          <MaterialsUsed />
          <WorkCompleted />
        </div>
        <div className="col-start-4 col-end-6 flex flex-col gap-6">
          <ProjectImages />
          <BeforeAndAfterImages />
          <ImagesCarousel />
          <SeoAltText />
        </div>
      </form>
    </div>
  );
}
