import { Link } from "@material-ui/core";
import React from "react";

export default function SubmitButton() {
  const [value, setValue] = React.useState("");
  const handleClick = () => {
    setValue("helo krishna");
  };

  return (
    <>
      {value}
      <button data-testid="submit" onClick={handleClick}>
        Submit
      </button>
    </>
  );
}
