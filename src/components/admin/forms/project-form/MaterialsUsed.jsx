import { useState } from "react";
import { Eraser } from "lucide-react";

import FormField from "../../../ui/FormField";
import SectionHeader from "../../ui/SectionHeader";
import AddItemButton from "../../ui/AddItemButton";
import MaterialsUsedItem from "./MeterialsUsedItem";

export default function MaterialsUsed() {
  const [materialsUsed, setMaterialsUsed] = useState([]);
  const [material, setMaterial] = useState("");

  function handleAddMaterial(e) {
    if (e.key !== "Enter") return;
    e.preventDefault();

    const trimmedMaterial = material.trim();

    if (!trimmedMaterial) return;

    setMaterialsUsed((prev) => {
      const alreadyExists = prev.some(
        (item) => item.toLowerCase() === trimmedMaterial.toLowerCase(),
      );
      if (alreadyExists) return prev;

      return [...prev, trimmedMaterial];
    });
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
      {materialsUsed.length > 0 && (
        <>
          <div className="text-sm">
            <p className="text-gray-dark">Materials Added: </p>
            <div className="inline-flex flex-wrap items-center gap-2">
              {materialsUsed.map((material) => (
                <MaterialsUsedItem key={material} material={material} />
              ))}
            </div>
          </div>
          <AddItemButton Icon={Eraser} onClick={() => setMaterialsUsed([])}>
            Clear List
          </AddItemButton>
        </>
      )}
    </div>
  );
}
