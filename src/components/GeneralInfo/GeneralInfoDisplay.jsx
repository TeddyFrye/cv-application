function GeneralInfoDisplay({ data, onEdit }) {
  return (
    <div>
      <h3>General Information</h3>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}

export default GeneralInfoDisplay;
