import React from "react";

export default function Gender() {
  return (
    <>
      <div>Gender</div>
      <select data-testid="gender" name="gender" id="gender">
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>
    </>
  );
}
