import React from "react";
import DropDown from "./DropDown";

export default {
  title: "Components/Inputs/DropDown",
  component: DropDown,
};

const Template = (args) => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Label",
    placeholder: "Select option",
    options:[
        { label: "United States", value: "us" },
        { label: "United Kingdom", value: "uk" },
        { label: "India", value: "in" },
      ]
};


