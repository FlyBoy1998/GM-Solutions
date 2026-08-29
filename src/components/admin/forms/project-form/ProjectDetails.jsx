import SectionHeader from "../../ui/SectionHeader";
import FormField from "../../../ui/FormField";

export default function ProjectDetails() {
  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Project Details"
        description="Additional information about the project."
      />
      <div className="grid grid-cols-4 gap-4">
        <FormField
          type="input"
          inputType="date"
          label="Completion Date"
          id="completion-date"
          name="completion-date"
          required
          additionalStyling="col-span-2"
        />
        <FormField
          type="input"
          inputType="text"
          label="Duration"
          id="duration"
          name="duration"
          placeholder="e.g. 2 weeks"
          required
          additionalStyling="col-span-2"
        />
        <FormField
          type="input"
          inputType="text"
          label="Project Size"
          id="project-size"
          name="project-size"
          placeholder="e.g. 18m2"
          required
          additionalStyling="col-span-2"
        />
        <FormField
          type="input"
          inputType="text"
          label="Budget Range"
          id="budget-range"
          name="budget-range"
          placeholder="e.g. £18,000 - £35,000"
          required
          additionalStyling="col-span-2"
        />
        <FormField
          type="textarea"
          label="Overview"
          id="overview"
          name="overview"
          placeholder="A detailed overview of the project..."
          required
          additionalStyling="col-span-full"
        />
      </div>
    </div>
  );
}
