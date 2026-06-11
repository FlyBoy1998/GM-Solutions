import { useContext } from "react";
import { Marker, useMap } from "react-leaflet";

import ProjectPopup from "./ProjectPopup";
import { MapContext } from "../../context/MapContext";
import { createProjectMarkerIcon, flyToProject } from "../../utils/utils";

export default function ProjectMarker({ project }) {
  const { selectedProject, handleSelectProject, handleClearSelection } =
    useContext(MapContext);

  const map = useMap();
  const isSelected = project.id === selectedProject?.id;

  function handleMarkerClick() {
    flyToProject(map, project.coordinates);
    handleSelectProject(project);
  }

  return (
    <Marker
      position={project.coordinates}
      icon={createProjectMarkerIcon({
        projectIndex: project.id,
        isSelected,
      })}
      eventHandlers={{
        click: handleMarkerClick,
        popupclose: handleClearSelection,
      }}
    >
      <ProjectPopup project={project} />
    </Marker>
  );
}
