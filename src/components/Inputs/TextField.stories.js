import React, { useState } from "react";
import TextField from "./TextField";

export default {
  title: "Components/Inputs/TextField",
  component: TextField,
};

export const DefaultTextField = () => {
  const [value, setValue] = useState("");
  return (
    <TextField
      label="Account Name"
      placeholder="Enter name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const DateField = () => {
  const [value, setValue] = useState("");
  return (
    <TextField
      type="date"
      label="Date of Joining"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const DisabledTextField = () => (
  <TextField label="Disabled Field" value="Disabled Value" disabled />
);
