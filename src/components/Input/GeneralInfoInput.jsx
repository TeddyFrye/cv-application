import { useState } from "react";

const GeneralInfoInput = ({ onSubmit, setShowToast }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = () => {
    const info = {
      name,
      title,
      contact,
    };
    onSubmit(info);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds

    // Reset the input fields after submit
    setName("");
    setTitle("");
    setContact("");
  };

  return (
    <div className="general-info-input">
      <label>
        Your Name:{" "}
        <span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </span>
      </label>

      <label>
        Your Title:{" "}
        <span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </span>
      </label>

      <label>
        Contact Info:{" "}
        <span>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </span>
      </label>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default GeneralInfoInput;
