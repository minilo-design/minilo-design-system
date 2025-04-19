import React from "react";
import AppBarAlt from "./AppBarAlt";

export default {
  title: "Components/NavBars/Mobile AppBar Alt",
  component: AppBarAlt,
};

const Template = (args) => <AppBarAlt {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title",
};
