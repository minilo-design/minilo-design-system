import React from 'react';
import SecondaryButton from './SecondaryButton';
import { ReactComponent as SampleIcon } from '../../assets/add-icon.svg';

export default {
  title: 'Components/Secondary Button',
  component: SecondaryButton,
  argTypes: {
    text: { control: 'text' },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    icon: { control: 'boolean' },
    loading: {control: 'boolean'}
  },
};

const Template = (args) => <SecondaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Register',
  disabled: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'Add to List',
  icon: SampleIcon,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: null,
  text: 'Register',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  icon: null,
  text: 'Register',
  loading:true
};
