import React, { useState, useEffect } from "react";
import { DogFact } from "./components/DogFact";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [dogFact, setDogFact] = useState(null);

  // Hint: Define the API endpoint
  const API = "https://dogapi.dog/api/v2/facts";

  // Hint: Create a function to fetch the dog fact
  const fetchDogFact = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setDogFact(data.data);
      })
      .catch((error) => {
        console.error("Failed to fetch dog fact:", error);
      });
  };

  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts
  useEffect(() => {
    fetchDogFact();
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <main>{dogFact && <DogFact dogFact={dogFact} />}</main>
        <Button
          fetchDogFact={fetchDogFact}
          onButtonClick={() => fetchDogFact}
        />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
