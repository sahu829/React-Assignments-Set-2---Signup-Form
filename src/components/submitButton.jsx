import React from "react";

export default function SubmitButton() {
  const handleClick = () => {
    "Hello krishna";
  };

  return (
    <>
      <button data-testid="submit" onClick={handleClick}>
        Submit
      </button>
    </>
  );
}
