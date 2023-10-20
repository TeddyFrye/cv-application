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
        Your school:
        <input
          type="text"
          value={school}
          onChange={(e) => setschool(e.target.value)}
        />
      </label>

      <label>
        Your degree:
        <input
          type="text"
          value={degree}
          onChange={(e) => setdegree(e.target.value)}
        />
      </label>

      <label>
        Graduation Year:
        <input
          type="text"
          value={graduation}
          onChange={(e) => setgraduation(e.target.value)}
        />
      </label>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EducationInfoInput;
