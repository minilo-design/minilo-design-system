import React from "react";
import CardLarge from "./CardLarge";

export default {
  title: "Components/Cards/CardLarge",
  component: CardLarge,
};

const Template = (args) => <CardLarge {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Candidate Details",
  status: "Active",
  details: [
    { label: "Role", value: "Product Designer" },
    { label: "Department", value: "UX Team" },
    { label: "Joining Date", value: "Mar 1, 2024" },
    { label: "Location", value: "Remote" },
    { label: "Manager", value: "Jane Doe" },
    { label: "Experience", value: "5 years" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
