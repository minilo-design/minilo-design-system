import React from 'react';
import SecondaryButton from './SecondaryButton';
import { ReactComponent as SampleIcon } from '../../assets/add-icon.svg';

export default {
  title: 'Components/Buttons/Secondary Button',
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
  loading: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'Add to List',
  icon: SampleIcon,
  disabled: false,
  loading: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: null,
  text: 'Register',
  disabled: true,
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  icon: null,
  text: 'Register',
  disabled: false,
  loading:true
};

export const DisabledAndLoading = Template.bind({});
DisabledAndLoading.args = {
  icon: null,
  text: 'Register',
  disabled: true,
  loading:true
};
