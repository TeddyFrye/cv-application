import { useState } from "react";

function EducationeducationDisplay({ educations, onDelete, onEdit }) {
  const [editing, setEditing] = useState(null);

  return (
    <div className="school-education-display">
      <h2>Education</h2>
      {educations.length === 0 ? (
        <p>No education added yet.</p>
      ) : (
        educations.map((education, index) => (
          <div key={index} className="school-education-item">
            <h3 onDoubleClick={() => setEditing({ type: "school", index })}>
              {editing &&
              editing.type === "school" &&
              editing.index === index ? (
                <input
                  defaultValue={education.school}
                  onBlur={(e) => {
                    onEdit(index, { ...education, school: e.target.value });
                    setEditing(null);
                  }}
                />
              ) : (
                education.school
              )}
            </h3>
            <p onDoubleClick={() => setEditing({ type: "degree", index })}>
              {editing &&
              editing.type === "degree" &&
              editing.index === index ? (
                <input
                  defaultValue={education.degree}
                  onBlur={(e) => {
                    onEdit(index, { ...education, degree: e.target.value });
                    setEditing(null);
                  }}
                />
              ) : (
                `degree: ${education.degree}`
              )}
            </p>
            <p onDoubleClick={() => setEditing({ type: "graduation", index })}>
              {editing &&
              editing.type === "graduation" &&
              editing.index === index ? (
                <input
                  defaultValue={education.graduation}
                  onBlur={(e) => {
                    onEdit(index, { ...education, graduation: e.target.value });
                    setEditing(null);
                  }}
                />
              ) : (
                `graduation: ${education.graduation}`
              )}
            </p>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default EducationeducationDisplay;
