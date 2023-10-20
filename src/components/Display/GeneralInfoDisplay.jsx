import { useState } from "react";

function GeneralInfoDisplay({ generalInfo, onEdit }) {
  const [editingField, setEditingField] = useState(null);
  const [editedName, setEditedName] = useState(
    generalInfo ? generalInfo.name : ""
  );
  const [editedTitle, setEditedTitle] = useState(
    generalInfo ? generalInfo.title : ""
  );
  const [editedContact, setEditedContact] = useState(
    generalInfo ? generalInfo.contact : ""
  );

  const handleDoubleClick = (field) => {
    setEditingField(field);
  };

  const handleEditSubmit = () => {
    onEdit({
      name: editedName,
      title: editedTitle,
      contact: editedContact,
    });
    setEditingField(null); // Exit editing mode after submitting changes
  };

  return (
    <div>
      {generalInfo ? (
        <>
          <p onDoubleClick={() => handleDoubleClick("name")}>
            Name:{" "}
            {editingField === "name" ? (
              <input
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                onBlur={handleEditSubmit}
                autoFocus
              />
            ) : (
              generalInfo.name
            )}
          </p>
          <p onDoubleClick={() => handleDoubleClick("title")}>
            Title:{" "}
            {editingField === "title" ? (
              <input
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                onBlur={handleEditSubmit}
                autoFocus
              />
            ) : (
              generalInfo.title
            )}
          </p>
          <p onDoubleClick={() => handleDoubleClick("contact")}>
            Contact:{" "}
            {editingField === "contact" ? (
              <input
                value={editedContact}
                onChange={(e) => setEditedContact(e.target.value)}
                onBlur={handleEditSubmit}
                autoFocus
              />
            ) : (
              generalInfo.contact
            )}
          </p>
        </>
      ) : (
        <p>No general info provided yet.</p>
      )}
    </div>
  );
}

export default GeneralInfoDisplay;
