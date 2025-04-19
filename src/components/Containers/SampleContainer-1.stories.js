import React from 'react';
import SampleContainer1 from './SampleContainer-1';

export default {
  title: 'Components/Containers/Sample Container 1',
  component: SampleContainer1,
};

const Template = (args) => <SampleContainer1 {...args} />;

export const Default = Template.bind({});
Default.args = {
    isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
