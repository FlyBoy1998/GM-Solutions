import FormField from "../../../../ui/FormField";

import {
  currencyOptions,
  dateFormatOptions,
  timeFormatOptions,
  measurementSystemOptions,
  currencyFormats,
} from "../../../../../constants/data";

export default function GeneralSettingsForm() {
  return (
    <form action="" className="grid grid-cols-2 gap-6">
      <FormField
        type="input"
        inputType="text"
        label="Tagline"
        id="tagline"
        name="tagline"
        defaultValue="Beautiful Spaces. Built Around you"
        additionalStyling="col-span-1"
      />
      <FormField
        type="select"
        label="Currency"
        id="currency"
        name="currency"
        options={currencyOptions}
        additionalStyling="col-span-1"
      />
      <FormField
        type="select"
        label="Currency Format"
        id="currency-format"
        name="currency-format"
        options={currencyFormats}
        additionalStyling="col-span-1"
      />
      <FormField
        type="select"
        label="Date Format"
        id="date-format"
        name="date-format"
        options={dateFormatOptions}
        additionalStyling="col-span-1"
      />
      <FormField
        type="select"
        label="Time Format"
        id="time-format"
        name="time-format"
        options={timeFormatOptions}
        additionalStyling="col-span-1"
      />
      <FormField
        type="select"
        label="Measurement System"
        id="measurement-system"
        name="measurement-system"
        options={measurementSystemOptions}
        additionalStyling="col-span-1"
      />
    </form>
  );
}
