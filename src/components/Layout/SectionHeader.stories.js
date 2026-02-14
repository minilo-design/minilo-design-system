import React from 'react';
import SectionHeader from './SectionHeader';

export default {
  title: 'Components/Layout/Section Header',
  component: SectionHeader,
  argTypes: {
    onAction: { action: 'action clicked' },
  },
};

const Template = (args) => <SectionHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  eyebrow: 'Foundations',
  title: 'Design tokens define every component baseline',
  description:
    'Typography, spacing, and color values are centralized so teams can move quickly without visual drift.',
};

export const WithAction = Template.bind({});
WithAction.args = {
  eyebrow: 'Components',
  title: 'Build UI blocks with reusable primitives',
  description:
    'Use this header pattern at the top of each panel to improve scanability and align with Minilo hierarchy rules.',
  actionText: 'View Docs',
};
