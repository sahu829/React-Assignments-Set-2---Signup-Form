import React, { Component, useState } from "react";
import "../styles/App.css";
import Email from "./email";
import Gender from "./gender";

import Name from "./name";
import Password from "./password";
import PhoneNumber from "./phoneNumber";
import SubmitButton from "./submitButton";

const App = () => {
  return (
    <>
      <div id="main"></div>
      <Name />
      <Password />
      <Email />
      <Gender />
      <PhoneNumber />
      <SubmitButton />
    </>
  );
};

export default App;
