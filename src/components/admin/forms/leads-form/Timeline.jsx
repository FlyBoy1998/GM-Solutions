import { useFormContext } from "react-hook-form";

import SectionHeader from "../../ui/SectionHeader";
import FormField from "../../../ui/FormField";

import { timeframes } from "../../../../constants/data";

export default function Timeline() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Timeline"
        description="When is the client looking to start?"
      />
      <div className="flex flex-col gap-4">
        <FormField
          type="input"
          inputType="date"
          label="Preferred Start Date"
          id="preferred-start-date"
          {...register("preferred_start_date")}
          errors={
            errors.preferred_start_date && (
              <p className="input-error">
                {errors.preferred_start_date.message}
              </p>
            )
          }
        />
        <FormField
          type="select"
          label="Timeframe"
          id="timeframe"
          optionsPlaceholder="Select timeframe"
          options={timeframes}
          {...register("timeframe")}
          errors={
            errors.timeframe && (
              <p className="input-error">{errors.timeframe.message}</p>
            )
          }
        />
      </div>
    </div>
  );
}
