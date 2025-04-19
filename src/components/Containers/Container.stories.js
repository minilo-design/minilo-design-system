import React from 'react';
import Container from './Container';

export default {
  title: 'Components/Containers/Container',
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
