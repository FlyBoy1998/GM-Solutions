import SectionHeader from "../../ui/SectionHeader";
import FormField from "../../../ui/FormField";

import { projectTypeOptions } from "../../../../constants/data";

export default function BasicInformation() {
  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Basic Information"
        description="Add the essential data about the project."
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          type="input"
          inputType="text"
          label="Title"
          id="tile"
          name="title"
          placeholder="e.g. Modern Kitchen Remodel"
          required
          additionalStyling="col-span-1"
        />
        <FormField
          type="select"
          options={projectTypeOptions}
          optionsPlaceholder="Select Category"
          label="Category"
          id="category"
          name="category"
          required
          additionalStyling="col-span-1"
        />
        <FormField
          type="input"
          inputType="text"
          label="Label"
          id="label"
          name="label"
          placeholder="e.g. Kitchen"
          required
          additionalStyling="col-span-1"
        />
        <FormField
          type="input"
          inputType="text"
          label="Address"
          id="address"
          name="address"
          placeholder="e.g. Clapham, London"
          required
          additionalStyling="col-span-1"
        />
        <FormField
          type="textarea"
          label="Description"
          id="description"
          name="description"
          placeholder="A short description of the project..."
          required
          additionalStyling="col-span-full"
        />
      </div>
    </div>
  );
}
