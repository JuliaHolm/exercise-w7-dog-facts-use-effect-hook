export const Button = ({ fetchDogFact }) => {
  return (
    <div className="btn-container">
      <button className="btn" onClick={fetchDogFact}>
        Get Another Dog Fact
      </button>
    </div>
  );
};
