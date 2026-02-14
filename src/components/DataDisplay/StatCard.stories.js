import React from 'react';
import StatCard from './StatCard';

export default {
  title: 'Components/Data Display/Stat Card',
  component: StatCard,
  argTypes: {
    trend: {
      control: 'select',
      options: ['up', 'down', 'flat'],
    },
    loading: { control: 'boolean' },
  },
};

const Template = (args) => <StatCard {...args} />;

export const Growth = Template.bind({});
Growth.args = {
  label: 'Weekly active users',
  value: '12,840',
  helper: '+8.4% from previous week',
  trend: 'up',
  loading: false,
};

export const Decline = Template.bind({});
Decline.args = {
  label: 'Session conversion',
  value: '2.3%',
  helper: '-0.6% from previous week',
  trend: 'down',
  loading: false,
};

export const Stable = Template.bind({});
Stable.args = {
  label: 'Average response time',
  value: '420 ms',
  helper: 'No change this week',
  trend: 'flat',
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
