import { useEffect } from "react";
import useFilteredProjects from "../../hooks/useFilteredProjects";
import {
  londonCoordinates,
  defaultMapZoom,
  mapAttribution,
  mapTileUrl,
} from "../../constants/data";

import { MapContainer, TileLayer, useMap } from "react-leaflet";

import ProjectMarker from "./ProjectMarker";

import useProjects from "../../hooks/useProjects";

export default function ProjectsMap({ activeTab }) {
  const { data: projects } = useProjects();
  const { filteredProjects } = useFilteredProjects(projects);

  return (
    <MapContainer
      center={londonCoordinates}
      zoom={defaultMapZoom}
      scrollWheelZoom={true}
      className="h-full rounded-md"
      aria-label="Map showing completed renovation projects"
    >
      <TileLayer attribution={mapAttribution} url={mapTileUrl} />
      <MapResizeHandler activeTab={activeTab} />
      {filteredProjects?.map((project, index) => (
        <ProjectMarker key={project.id} project={project} index={index + 1} />
      ))}
    </MapContainer>
  );
}

function MapResizeHandler({ activeTab }) {
  const map = useMap();

  useEffect(() => {
    if (activeTab !== "map") return;

    const frame = requestAnimationFrame(() => {
      map.invalidateSize({ pan: false });
    });

    return () => cancelAnimationFrame(frame);
  }, [activeTab, map]);

  return null;
}
