import React from "react";

export default function Password() {
  return (
    <>
      <div>Password</div>
      <input
        data-testid="password"
        type="password"
        placeholder="password"
        name="password"
      />
    </>
  );
}
