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

  const thumbnail = selectedProject?.project_images.find(
    (image) => image.image_type === "thumbnail",
  ).storage_path.publicUrl;
  const beforeImage = selectedProject?.project_images.find(
    (image) => image.image_type === "before",
  ).storage_path.publicUrl;
  const afterImage = selectedProject?.project_images.find(
    (image) => image.image_type === "after",
  ).storage_path.publicUrl;

  useEffect(() => {
    if (selectedProject?.id === project.id) {
      flyToProject(map, [project.latitude, project.longitude]);
      markerRef.current?.openPopup();
    }
  }, [map, selectedProject, project.id, project.latitude, project.longitude]);

  function handleMarkerClick() {
    flyToProject(map, [project.latitude, project.longitude]);
    handleSelectProject(project);
  }

  return (
    <Marker
      ref={markerRef}
      position={[project.latitude, project.longitude]}
      icon={createProjectMarkerIcon({
        projectIndex: project.id,
        isSelected,
      })}
      eventHandlers={{
        click: handleMarkerClick,
        popupclose: handleClearSelection,
      }}
    >
      <ProjectPopup
        project={project}
        thumbnail={thumbnail}
        beforeImage={beforeImage}
        afterImage={afterImage}
      />
    </Marker>
  );
}
