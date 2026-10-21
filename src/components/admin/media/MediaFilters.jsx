import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useForm, useWatch } from "react-hook-form";
import { Search, List } from "lucide-react";
import useDebounce from "../../../hooks/useDebounce";

import FormField from "../../../components/ui/FormField";

import { mediaTypesOptions } from "../../../constants/data";

export default function MediaFilters({ filesNumber }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, control } = useForm({
    defaultValues: {
      search_media: searchParams.get("search_media") || "",
      media_type: searchParams.get("media_type") || "",
    },
  });

  const searchMedia = useWatch({
    control,
    name: "search_media",
  });

  const mediaType = useWatch({
    control,
    name: "media_type",
  });

  const debouncedSearchMedia = useDebounce(searchMedia);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (debouncedSearchMedia) {
      newSearchParams.set("search_media", debouncedSearchMedia);
    } else {
      newSearchParams.delete("search_media");
    }

    if (mediaType) {
      newSearchParams.set("media_type", mediaType);
    } else {
      newSearchParams.delete("media_type");
    }

    setSearchParams(newSearchParams, { replace: true });
  }, [searchParams, debouncedSearchMedia, mediaType, setSearchParams]);

  return (
    <div className="col-span-full flex justify-between items-center p-4 rounded-lg shadow-md bg-white max-md:flex-col max-md:gap-4">
      <form className="grid grid-cols-4 gap-4 max-md:w-full">
        <FormField
          inputType="text"
          id="searchMedia"
          placeholder="Search media..."
          icon={<Search className="text-gray-dark" size={16} aria-hidden />}
          {...register("search_media")}
          additionalStyling="col-span-2 max-md:col-span-full"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Types"
          options={mediaTypesOptions}
          icon={<List className="text-gray-dark" size={16} aria-hidden />}
          {...register("media_type")}
          additionalStyling="col-span-2 max-md:col-span-full"
        />
      </form>
      <p className="text-sm">
        <span className="font-bold">{filesNumber}</span> Results
      </p>
    </div>
  );
}
