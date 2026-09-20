import { useQuery } from "@tanstack/react-query";
import { getMediaFiles } from "../api/api";

export default function useMediaFiles() {
  return useQuery({
    queryKey: ["media"],
    queryFn: getMediaFiles,
  });
}
