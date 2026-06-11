import useFilteredProjects from "../../hooks/useFilteredProjects";
import {
  londonCoordinates,
  defaultMapZoom,
  mapAttribution,
  mapTileUrl,
} from "../../constants/data";

import { MapContainer, TileLayer } from "react-leaflet";

import ProjectMarker from "./ProjectMarker";

export default function ProjectsMap() {
  const { filteredProjects } = useFilteredProjects();

  return (
    <MapContainer
      center={londonCoordinates}
      zoom={defaultMapZoom}
      scrollWheelZoom={true}
      className="h-full rounded-md"
      aria-label="Map showing completed renovation projects"
    >
      <TileLayer attribution={mapAttribution} url={mapTileUrl} />
      {filteredProjects.map((project) => (
        <ProjectMarker project={project} key={project.id} />
      ))}
    </MapContainer>
  );
}
