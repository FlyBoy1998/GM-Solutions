import { useState } from "react";
import { Plus, X } from "lucide-react";

import FormField from "../../../ui/FormField";
import SectionHeader from "../../ui/SectionHeader";
import WorkCompletedItem from "./WorkCompletedItem";
import AddItemButton from "../../ui/AddItemButton";

export default function WorkCompleted() {
  const [workCompleted, setWorkCompleted] = useState([]);
  const [workItem, setWorkItem] = useState("");
  const [isAddingItem, setIsAddingItem] = useState(false);

  let workCompletedContent;

  if (workCompleted.length === 0) {
    workCompletedContent = (
      <p className="text-sm text-gray-dark">
        There are no work completed items on your list.
      </p>
    );
  } else {
    workCompletedContent = (
      <ul className="list-none flex flex-col gap-2">
        {workCompleted.map((item) => (
          <WorkCompletedItem
            key={item.id}
            id={item.id}
            description={item.description}
            onDelete={handleDeleteItem}
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

    setWorkCompleted((prev) => {
      const alreadyExists = prev.some(
        (item) => item.description.toLowerCase() === trimmedItem.toLowerCase(),
      );

      if (alreadyExists) return prev;

      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          description: trimmedItem,
        },
      ];
    });
    setWorkItem("");
  }

  function handleDeleteItem(id) {
    setWorkCompleted((prev) => prev.filter((item) => item.id !== id));
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
