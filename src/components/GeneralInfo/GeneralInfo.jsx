import React, { useState } from "react";
import GeneralInfoForm from "./GeneralInfoForm.jsx";
import GeneralInfoDisplay from "./GeneralInfoDisplay.jsx";

function GeneralInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const info = { name, email, phone }; // group them into one object for easier passing

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        (<GeneralInfoDisplay data={info} onEdit={handleEdit} />)(
          <GeneralInfoForm onSave={handleSave} initialData={info} />
        )
      )}
    </div>
  );
}

export default GeneralInfo;
