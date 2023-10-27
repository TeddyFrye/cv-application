import { useState } from "react";

function JobExperienceDisplay({ experiences, onDelete, onEdit }) {
  const [editing, setEditing] = useState(null);

  return (
    <div className="job-experience-display">
      <h2>Job Experiences</h2>
      {experiences.length === 0 ? (
        <p>No job experiences added yet.</p>
      ) : (
        experiences.map((experience, index) => (
          <div key={index} className="job-experience-item">
            <h3 onDoubleClick={() => setEditing({ type: "job", index })}>
              {editing && editing.type === "job" && editing.index === index ? (
                <input
                  defaultValue={experience.job || "No title provided"} // Use placeholder text if job is empty
                  onBlur={(e) => {
                    onEdit(index, { ...experience, job: e.target.value });
                    setEditing(null);
                  }}
                />
              ) : (
                experience.job || (
                  <span className="placeholder">No title provided</span>
                ) // Display placeholder if job is empty
              )}
            </h3>
            <p onDoubleClick={() => setEditing({ type: "company", index })}>
              {editing &&
              editing.type === "company" &&
              editing.index === index ? (
                <input
                  defaultValue={experience.company}
                  onBlur={(e) => {
                    onEdit(index, { ...experience, company: e.target.value });
                    setEditing(null);
                  }}
                />
              ) : (
                `Company: ${experience.company}`
              )}
            </p>
            <p onDoubleClick={() => setEditing({ type: "tenure", index })}>
              {editing &&
              editing.type === "tenure" &&
              editing.index === index ? (
                <input
                  defaultValue={experience.tenure}
                  onBlur={(e) => {
                    onEdit(index, { ...experience, tenure: e.target.value });
                    setEditing(null);
                  }}
                />
              ) : (
                `Tenure: ${experience.tenure}`
              )}
            </p>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default JobExperienceDisplay;
