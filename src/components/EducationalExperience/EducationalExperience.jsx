import EducationalExperienceForm from "./EducationalExperienceForm.jsx";
import EducationalExperienceDisplay from "./EducationalExperienceDisplay.jsx";

function EducationalExperience() {
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
        <EducationalExperienceForm onSave={handleSave} initialData={info} />
      ) : (
        <EducationalExperienceDisplay data={info} onEdit={handleEdit} />
      )}
    </div>
  );
}

export default EducationalExperience;
