import React from "react";
import SearchField from "./SearchField";

export default {
  title: "Components/Inputs/SearchField",
  component: SearchField,
};

const Template = (args) => <SearchField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search...",
};
