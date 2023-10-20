function GeneralInfoDisplay({ generalInfo }) {
  return (
    <div>
      {generalInfo ? (
        <>
          <p>Name: {generalInfo.name}</p>
          <p>Title: {generalInfo.title}</p>
          <p>Contact: {generalInfo.contact}</p>
        </>
      ) : (
        <p>No general info provided yet.</p>
      )}
    </div>
  );
}

export default GeneralInfoDisplay;
