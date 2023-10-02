// DogFact.jsx
export const DogFact = ({ dogFact }) => {
  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop
  const cleanFact = dogFact[0].attributes.body;
  console.log(cleanFact);

  // Hint: Render the 'cleanFact' if available, otherwise show a loading message
  return (
    <div className="dog-fact-container">
      <h1>Dog fact</h1>
      {/* Conditional ternary operator ? and : will determine what to display based on the value of cleanFact.
      
      If cleanFact evaluates to a truthy value (not null), it is considered true and the value is returned in ${cleanFact}.

      If cleanFact is falsy, the string "Loading dog fact..." is returned. */}
      <p className="fact-text">
        {cleanFact ? `${cleanFact}` : "Loading dog fact..."}
      </p>
    </div>
  );
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />
