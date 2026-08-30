import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Eraser } from "lucide-react";

import FormField from "../../../ui/FormField";
import SectionHeader from "../../ui/SectionHeader";
import AddItemButton from "../../ui/AddItemButton";
import MaterialsUsedItem from "./MeterialsUsedItem";

export default function MaterialsUsed() {
  const [material, setMaterial] = useState("");

  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "materials",
  });

  function handleAddMaterial(e) {
    if (e.key !== "Enter") return;
    e.preventDefault();

    const trimmedMaterial = material.trim();

    if (!trimmedMaterial) return;

    const alreadyExists = fields.some(
      (item) =>
        item.trimmedMaterial.toLowerCase() === trimmedMaterial.toLowerCase(),
    );

    if (alreadyExists) return;

    append({ trimmedMaterial });
    setMaterial("");
  }

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Materials Used"
        description="Add materials and finishes used in the project."
      />
      <FormField
        type="input"
        inputType="text"
        label="Add Material"
        id="material"
        name="material"
        placeholder="Type a material and press Enter..."
        required
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
        onKeyDown={handleAddMaterial}
      />
      {fields.length > 0 && (
        <>
          <div className="text-sm">
            <p className="text-gray-dark">Materials Added: </p>
            <div className="inline-flex flex-wrap items-center gap-2">
              {fields.map((material) => (
                <MaterialsUsedItem
                  key={material.id}
                  material={material.trimmedMaterial}
                />
              ))}
            </div>
          </div>
          <AddItemButton Icon={Eraser} onClick={() => remove()}>
            Clear List
          </AddItemButton>
        </>
      )}
    </div>
  );
}
