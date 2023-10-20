import { useState } from "react";

const GeneralInfoInput = ({ onSubmit }) => {
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

    // Reset the input fields after submit
    setName("");
    setTitle("");
    setContact("");
  };

  return (
    <div className="general-info-input">
      <label>
        Your Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Your Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>
        Contact Info:
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default GeneralInfoInput;
