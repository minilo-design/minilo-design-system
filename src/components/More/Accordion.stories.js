import React from "react";
import Accordion from "./Accordion";

export default {
  title: "components/More/Accordion",
  component: Accordion,
  argTypes: {
    title: { control: "text" },
    loading: { control: "boolean" }
  }
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Accordion",
  children: (
    <>
      This is content inside the accordion component.
      <br />
      It follows Minilo Design Principles, including border radius, color, typography, and spacing.
    </>
  ),
};

export const Loading = Template.bind({});
Loading.args = {
  title: "Accordion",
  loading: true,
  children: (
    <>
      This is content inside the accordion component.
      <br />
      It follows Minilo Design Principles, including border radius, color, typography, and spacing.
    </>
  ),
};
