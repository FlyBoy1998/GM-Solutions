import { useQuery } from "@tanstack/react-query";
import { getMediaFiles } from "../api/mediaApi";

export default function useMediaFiles() {
  return useQuery({
    queryKey: ["media"],
    queryFn: getMediaFiles,
    staleTime: 10 * 60 * 1000,
  });
}
