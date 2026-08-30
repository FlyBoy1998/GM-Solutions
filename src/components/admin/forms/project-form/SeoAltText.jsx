import { useFormContext } from "react-hook-form";

import FormField from "../../../ui/FormField";
import SectionHeader from "../../ui/SectionHeader";

export default function SeoAltText() {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="SEO / Alt Text"
        description="Improve accessibility and SEO."
      />
      <FormField
        type="textarea"
        label="Alt Text"
        id="main-img-alt"
        {...register("main_img_alt")}
        placeholder="e.g. Modern kitchen renovation with quartz countertops and oak cabinets in Clapham, London"
      />
    </div>
  );
}
