import React from 'react';
import PrimaryButton from './PrimaryButton';

export default {
  title: 'Components/Buttons/Primary Button',
  component: PrimaryButton,
  argTypes: {
    text: { control: 'text' },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

const Template = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Sign In',
  disabled: false,
  loading: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Sign In',
  disabled: true,
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  text: 'Sign In',
  disabled: false,
  loading: true,
};

export const DisabledAndLoading = Template.bind({});
DisabledAndLoading.args = {
  text: 'Sign In',
  disabled: true,
  loading: true,
};
