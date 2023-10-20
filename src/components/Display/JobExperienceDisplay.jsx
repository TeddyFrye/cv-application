function JobExperienceDisplay({ experiences, onDelete }) {
  return (
    <div className="job-experience-display">
      <h2>Job Experiences</h2>
      {experiences.length === 0 ? (
        <p>No job experiences added yet.</p>
      ) : (
        experiences.map((experience, index) => (
          <div key={index} className="job-experience-item">
            <h3>Job: {experience.job}</h3>
            <p>Company: {experience.company}</p>
            <p>Tenure: {experience.tenure}</p>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default JobExperienceDisplay;
