import React from 'react';
import TertiaryButton from './TertiaryButton';
import { ReactComponent as SampleIcon } from '../assets/add-icon.svg';

export default {
  title: 'Components/Tertiary Button',
  component: TertiaryButton,
  argTypes: {
    text: { control: 'text' },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    icon: { control: 'boolean' },
  },
};

const Template = (args) => <TertiaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Add Item',
  disabled: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'Add Item',
  icon: SampleIcon,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Add Item',
  disabled: true,
};
