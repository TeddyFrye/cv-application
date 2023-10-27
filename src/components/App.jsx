import { useState } from "react";
import GeneralInfoInput from "./Input/GeneralInfoInput";
import JobExperienceInput from "./Input/JobExperienceInput";
import EducationExperienceInput from "./Input/EducationExperienceInput";
import GeneralInfoDisplay from "./Display/GeneralInfoDisplay";
import JobExperienceDisplay from "./Display/JobExperienceDisplay";
import EducationExperienceDisplay from "./Display/EducationExperienceDisplay";
import "../styles/App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState(null);
  const [jobExperiences, setJobExperiences] = useState([]);
  const [educationExperiences, setEducationExperiences] = useState([]);
  const [editingIndex, setEditingIndex] = useState({ type: null, index: null });
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="app">
      {showToast && (
        <div className="toast">Double click any information to edit</div>
      )}
      <div className="input-section">
        <GeneralInfoInput
          onSubmit={setGeneralInfo}
          setShowToast={setShowToast}
        />
        <JobExperienceInput
          onSubmit={(exp) => setJobExperiences([...jobExperiences, exp])}
        />
        <EducationExperienceInput
          onSubmit={(exp) =>
            setEducationExperiences([...educationExperiences, exp])
          }
        />
      </div>
      <div className="display-section">
        <GeneralInfoDisplay
          generalInfo={generalInfo}
          onDelete={() => setGeneralInfo(null)}
          onEdit={(editedData) => {
            setGeneralInfo(editedData);
            setEditingIndex({ type: "general", index: null });
          }}
        />
        <JobExperienceDisplay
          experiences={jobExperiences}
          onDelete={(index) => {
            const updatedJobs = [...jobExperiences];
            updatedJobs.splice(index, 1);
            setJobExperiences(updatedJobs);
          }}
          onEdit={(index, editedData) => {
            setEditingIndex({ type: "job", index });
            const updatedJobs = [...jobExperiences];
            updatedJobs[index] = editedData;
            setJobExperiences(updatedJobs);
          }}
        />
        <EducationExperienceDisplay
          educations={educationExperiences}
          onDelete={(index) => {
            const updatedSchool = [...educationExperiences];
            updatedSchool.splice(index, 1);
            setEducationExperiences(updatedSchool);
          }}
          onEdit={(index, editedData) => {
            setEditingIndex({ type: "education", index });
            const updatedSchool = [...educationExperiences];
            updatedSchool[index] = editedData;
            setEducationExperiences(updatedSchool);
          }}
        />
      </div>
    </div>
  );
}

export default App;
