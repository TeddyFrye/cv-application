import { useState } from "react";

const JobInfoInput = ({ onSubmit }) => {
  const [job, setjob] = useState("");
  const [company, setcompany] = useState("");
  const [tenure, settenure] = useState("");

  const handleSubmit = () => {
    const info = {
      job,
      company,
      tenure,
    };
    onSubmit(info);

    // Reset the input fields after submit
    setjob("");
    setcompany("");
    settenure("");
  };

  return (
    <div classjobname="job-info-input">
      <label>
        Your job:
        <input
          type="text"
          value={job}
          onChange={(e) => setjob(e.target.value)}
        />
      </label>

      <label>
        Your company:
        <input
          type="text"
          value={company}
          onChange={(e) => setcompany(e.target.value)}
        />
      </label>

      <label>
        tenure Info:
        <input
          type="text"
          value={tenure}
          onChange={(e) => settenure(e.target.value)}
        />
      </label>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default JobInfoInput;
