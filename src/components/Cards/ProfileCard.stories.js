import React from "react";
import ProfileCard from "./ProfileCard";
import SampleImage from '../../assets/sample-image.png';
export default {
  title: "components/Cards/ProfileCard",
  component: ProfileCard,
};

const Template = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Maruti Narayan",
  title: "Project Manager",
  label: "Active",
  userId: "UserID : PDBT99",
  location: "JP Nagar, Bengaluru, KA, India",
  joined: "Joined in November 2023",
  profileImage: SampleImage,
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
