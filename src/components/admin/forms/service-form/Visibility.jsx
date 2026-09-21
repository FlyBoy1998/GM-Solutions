import { Info } from "lucide-react";
import { useFormContext, Controller } from "react-hook-form";

import SectionHeader from "../../ui/SectionHeader";
import ToggleButton from "../../ui/ToggleButton";

export default function Visibility() {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Visibility"
        description="Control how this service is displayed."
      />
      <Controller
        name="is_visible"
        control={control}
        render={({ field }) => (
          <div className="flex items-center gap-2">
            <ToggleButton
              isToggled={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
            <span className="text-xs">
              {field.value ? "Visible on website." : "Invisible on website."}
            </span>
          </div>
        )}
      ></Controller>
      <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-100">
        <Info
          size={24}
          strokeWidth={2}
          className="rounded-full text-blue-600"
          aria-hidden
        />
        <p className="text-xs text-blue-600">
          Inactive services will not be shown on your website, but will be saved
          for future use.
        </p>
      </div>
    </div>
  );
}
