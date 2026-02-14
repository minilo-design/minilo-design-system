import React from 'react';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    onNavigate: { action: 'navigate' },
  },
};

const Template = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', href: '#' },
    { label: 'Design System', href: '#' },
    { label: 'Components', href: '#' },
    { label: 'Buttons' },
  ],
  separator: '/',
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  items: [
    { label: 'Workspace', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Minilo UI Kit' },
  ],
  separator: '>',
};
