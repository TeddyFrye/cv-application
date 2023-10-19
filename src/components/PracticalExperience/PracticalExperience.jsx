import PracticalExperienceDisplay from "./PracticalExperienceDisplay";
import PracticalExperienceForm from "./PracticalExperienceForm";
import { useState } from "react";

function PracticalExperience() {
  const [info, setInfo] = useState(null);
  const [isEditing, setIsEditing] = useState(true);

  const handleSave = (newInfo) => {
    setInfo(newInfo);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <PracticalExperienceForm onSave={handleSave} initialData={info} />
      ) : (
        <PracticalExperienceDisplay data={info} onEdit={handleEdit} />
      )}
    </div>
  );
}

export default PracticalExperience;
