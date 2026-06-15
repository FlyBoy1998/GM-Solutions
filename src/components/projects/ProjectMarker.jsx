import { useContext, useEffect, useRef } from "react";
import { Marker, useMap } from "react-leaflet";
import { MapContext } from "../../context/MapContext";

import { createProjectMarkerIcon, flyToProject } from "../../utils/utils";

import ProjectPopup from "./ProjectPopup";

export default function ProjectMarker({ project }) {
  const { selectedProject, handleSelectProject, handleClearSelection } =
    useContext(MapContext);
  const markerRef = useRef(null);

  const map = useMap();
  const isSelected = project.id === selectedProject?.id;

  useEffect(() => {
    if (selectedProject?.id === project.id) {
      flyToProject(map, project.coordinates);
      markerRef.current?.openPopup();
    }
  }, [map, selectedProject, project.id, project.coordinates]);

  function handleMarkerClick() {
    flyToProject(map, project.coordinates);
    handleSelectProject(project);
  }

  return (
    <Marker
      ref={markerRef}
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
