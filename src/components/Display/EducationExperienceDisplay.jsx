function EducationDisplay({ education, onDelete }) {
  return (
    <div className="job-education-display">
      <h2>Education</h2>
      {education.length === 0 ? (
        <p>No education added yet.</p>
      ) : (
        education.map((education, index) => (
          <div key={index} className="job-education-item">
            <h3>School: {education.school}</h3>
            <p>Degree: {education.degree}</p>
            <p>Year Graduated: {education.graduation}</p>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default EducationDisplay;
