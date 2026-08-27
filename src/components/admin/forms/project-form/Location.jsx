import { useSearchParams } from "react-router";
import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet";

import SectionHeader from "../../ui/SectionHeader";
import FormField from "../../../ui/FormField";
import CtaButton from "../../../ui/CtaButton";

import {
  mapAttribution,
  mapTileUrl,
  londonCoordinates,
  defaultMapZoom,
} from "../../../../constants/data";

export default function Location() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat") || "";
  const lng = searchParams.get("lng") || "";

  function clearSearchParams() {
    setSearchParams({}, { replace: true });
  }

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Location"
        description="Set the project location on the map."
      />
      <div className="grid grid-cols-2 gap-4">
        <FormField
          type="input"
          inputType="text"
          label="Latitude"
          id="latitude"
          name="latitude"
          placeholder="e.g. 51.486337"
          defaultValue={lat ? lat : ""}
          required
          additionalStyling="col-span-1"
        />
        <FormField
          type="input"
          inputType="text"
          label="Longitude"
          id="longitude"
          name="longitude"
          placeholder="e.g. -10.486337"
          defaultValue={lng ? lng : ""}
          required
          additionalStyling="col-span-1"
        />
        <div className="col-span-full">
          <h3 className="mb-1 text-sm font-bold">Map Preview</h3>
          <div className="w-full h-70 mb-2">
            <MapContainer
              scrollWheelZoom={true}
              center={londonCoordinates}
              zoom={defaultMapZoom}
              className="h-full rounded-md"
              aria-label="A map where the admin can click to add project coordinates"
            >
              <TileLayer attribution={mapAttribution} url={mapTileUrl} />

              <MapClickHandler />
              <ChangeMapPosition
                position={lat && lng ? [+lat, +lng] : londonCoordinates}
              />
            </MapContainer>
          </div>

          <CtaButton
            variant="secondary"
            type="button"
            onClick={clearSearchParams}
          >
            Reset Coordinates
          </CtaButton>
        </div>
      </div>
    </div>
  );
}

function ChangeMapPosition({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function MapClickHandler() {
  const [, setSearchParams] = useSearchParams();

  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;

      setSearchParams({ lat, lng });
    },
  });

  return null;
}
