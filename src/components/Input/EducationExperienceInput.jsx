import { useState } from "react";

const EducationInfoInput = ({ onSubmit }) => {
  const [school, setschool] = useState("");
  const [degree, setdegree] = useState("");
  const [graduation, setgraduation] = useState("");

  const handleSubmit = () => {
    const info = {
      school,
      degree,
      graduation,
    };
    onSubmit(info);

    // Reset the input fields after submit
    setschool("");
    setdegree("");
    setgraduation("");
  };

  return (
    <div className="education-info-input">
      <label>
        Your School:{" "}
        <span>
          <input
            type="text"
            value={school}
            onChange={(e) => setschool(e.target.value)}
          />
        </span>
      </label>

      <label>
        Your Degree:{" "}
        <span>
          <input
            type="text"
            value={degree}
            onChange={(e) => setdegree(e.target.value)}
          />
        </span>
      </label>

      <label>
        Graduation Year:{" "}
        <span>
          <input
            type="text"
            value={graduation}
            onChange={(e) => setgraduation(e.target.value)}
          />
        </span>
      </label>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EducationInfoInput;
