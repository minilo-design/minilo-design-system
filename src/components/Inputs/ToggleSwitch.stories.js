import React from 'react';
import ToggleSwitch from './ToggleSwitch';

export default {
  title: 'Components/Inputs/Toggle Switch',
  component: ToggleSwitch,
  argTypes: {
    onChange: { action: 'toggled' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <ToggleSwitch {...args} />;

export const Off = Template.bind({});
Off.args = {
  label: 'Enable release mode',
  hint: 'This option publishes new UI changes to production.',
  defaultChecked: false,
  disabled: false,
};

export const On = Template.bind({});
On.args = {
  label: 'Enable release mode',
  hint: 'This option publishes new UI changes to production.',
  defaultChecked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Feature flag lock',
  hint: 'This setting is managed by administrators only.',
  defaultChecked: true,
  disabled: true,
};
