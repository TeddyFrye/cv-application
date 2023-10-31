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
    <div className="job-info-input">
      <label>
        Your Job:{" "}
        <span>
          <input
            type="text"
            value={job}
            onChange={(e) => setjob(e.target.value)}
          />
        </span>
      </label>

      <label>
        Your Company:{" "}
        <span>
          <input
            type="text"
            value={company}
            onChange={(e) => setcompany(e.target.value)}
          />
        </span>
      </label>

      <label>
        Tenure Info:{" "}
        <span>
          <input
            type="text"
            value={tenure}
            onChange={(e) => settenure(e.target.value)}
          />
        </span>
      </label>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default JobInfoInput;
