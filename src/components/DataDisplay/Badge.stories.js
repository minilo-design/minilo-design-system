import React from 'react';
import Badge from './Badge';

export default {
  title: 'Components/Data Display/Badge',
  component: Badge,
  argTypes: {
    tone: {
      control: 'select',
      options: ['neutral', 'info', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    filled: { control: 'boolean' },
  },
};

const Template = (args) => <Badge {...args} />;

export const Neutral = Template.bind({});
Neutral.args = {
  label: 'Default',
  tone: 'neutral',
  size: 'md',
  filled: false,
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'Published',
  tone: 'success',
  size: 'md',
  filled: true,
};

export const AllTones = () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <Badge label="Neutral" tone="neutral" filled />
    <Badge label="Info" tone="info" filled />
    <Badge label="Success" tone="success" filled />
    <Badge label="Warning" tone="warning" filled />
    <Badge label="Error" tone="error" filled />
  </div>
);
