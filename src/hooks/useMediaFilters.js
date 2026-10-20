import { useMemo } from "react";
import { useSearchParams } from "react-router";

export default function useMediaFilters(mediaFiles = []) {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search_media") || "";
  const type = searchParams.get("media_type") || "";

  const filteredMedia = useMemo(() => {
    return mediaFiles.filter((media) => {
      const matchesSearch =
        !search || media.name.toLowerCase().includes(search.toLowerCase());

      const matchesType = !type || media.type === type;

      return matchesSearch && matchesType;
    });
  }, [mediaFiles, search, type]);

  return { search, type, filteredMedia };
}
