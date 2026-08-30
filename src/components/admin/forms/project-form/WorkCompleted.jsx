import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, X } from "lucide-react";

import FormField from "../../../ui/FormField";
import SectionHeader from "../../ui/SectionHeader";
import WorkCompletedItem from "./WorkCompletedItem";
import AddItemButton from "../../ui/AddItemButton";

export default function WorkCompleted() {
  const [workItem, setWorkItem] = useState("");
  const [isAddingItem, setIsAddingItem] = useState(false);

  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "work_completed",
  });

  let workCompletedContent;

  if (fields.length === 0) {
    workCompletedContent = (
      <p className="text-sm text-gray-dark">
        There are no work completed items on your list.
      </p>
    );
  } else {
    workCompletedContent = (
      <ul className="list-none flex flex-col gap-2">
        {fields.map((item, index) => (
          <WorkCompletedItem
            key={item.id}
            item={item}
            onClick={() => remove(index)}
          />
        ))}
      </ul>
    );
  }

  function handleAddItem(e) {
    if (e.key !== "Enter") return;
    e.preventDefault();

    const trimmedItem = workItem.trim();

    if (!trimmedItem) return;

    const alreadyExists = fields.some(
      (item) => item.description.toLowerCase() === trimmedItem.toLowerCase(),
    );

    if (alreadyExists) return;

    append({
      description: trimmedItem,
    });
    setWorkItem("");
  }

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Work Completed"
        description="List the work completed for this project."
      />

      {workCompletedContent}

      {isAddingItem && (
        <FormField
          type="input"
          inputType="text"
          label="Add Work Item"
          id="work-item"
          name="work_item"
          placeholder="e.g. Fitted quartz worktop throughout"
          value={workItem}
          onChange={(e) => setWorkItem(e.target.value)}
          onKeyDown={handleAddItem}
          required
        />
      )}

      <AddItemButton
        Icon={isAddingItem ? X : Plus}
        onClick={() => setIsAddingItem((prev) => !prev)}
      >
        {isAddingItem ? "Cancel" : "Add Work Item"}
      </AddItemButton>
    </div>
  );
}
