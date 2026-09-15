import { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
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
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const lat = watch("latitude");
  const lng = watch("longitude");

  const hasCoordinates =
    lat !== "" &&
    lng !== "" &&
    !Number.isNaN(Number(lat)) &&
    !Number.isNaN(Number(lng));

  const position = useMemo(() => {
    return hasCoordinates ? [Number(lat), Number(lng)] : londonCoordinates;
  }, [lat, lng, hasCoordinates]);

  function handleResetCoordinates() {
    setValue("latitude", "", {
      shouldDirty: true,
      shouldValidate: true,
    });

    setValue("longitude", "", {
      shouldDirty: true,
      shouldValidate: true,
    });
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
          {...register("latitude", {
            required: "Latitude is required.",
            validate: (value) =>
              (Number(value) >= -90 && Number(value) <= 90) ||
              "Latitude must be beween -90 and 90.",
          })}
          placeholder="e.g. 51.486337"
          required
          additionalStyling="col-span-1"
          errors={
            errors?.latitude && (
              <p className="input-error">{errors?.latitude.message}</p>
            )
          }
        />
        <FormField
          type="input"
          inputType="text"
          label="Longitude"
          id="longitude"
          {...register("longitude", {
            required: "Longitude is required.",
            validate: (value) =>
              (Number(value) >= -180 && Number(value) <= 180) ||
              "Longitude must be between -180 and 180.",
          })}
          placeholder="e.g. -10.486337"
          required
          additionalStyling="col-span-1"
          errors={
            errors?.longitude && (
              <p className="input-error">{errors?.longitude.message}</p>
            )
          }
        />
        <div className="col-span-full">
          <h3 className="mb-1 text-sm font-bold">Map Preview</h3>
          <div className="w-full h-70 mb-2">
            <MapContainer
              scrollWheelZoom={true}
              center={position}
              zoom={defaultMapZoom}
              className="h-full rounded-md"
              aria-label="A map where the admin can click to add project coordinates"
            >
              <TileLayer attribution={mapAttribution} url={mapTileUrl} />

              <MapClickHandler setValue={setValue} />
              <ChangeMapPosition position={position} />
            </MapContainer>
          </div>

          <CtaButton
            variant="secondary"
            type="button"
            onClick={handleResetCoordinates}
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

  useEffect(() => {
    map.setView(position);
  }, [map, position]);

  return null;
}

function MapClickHandler({ setValue }) {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;

      setValue("latitude", lat.toFixed(6), {
        shouldDirty: true,
        shouldValidate: true,
      });

      setValue("longitude", lng.toFixed(6), {
        shouldDirty: true,
        shouldValidate: true,
      });
    },
  });

  return null;
}
