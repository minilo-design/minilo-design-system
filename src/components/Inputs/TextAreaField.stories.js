import React from 'react';
import TextAreaField from './TextAreaField';

export default {
  title: 'Components/Inputs/TextArea Field',
  component: TextAreaField,
  argTypes: {
    onChange: { action: 'changed' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

const Template = (args) => <TextAreaField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Notes',
  placeholder: 'Add your notes',
  helperText: 'Maximum 500 characters.',
  defaultValue: '',
  disabled: false,
  required: false,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Summary',
  defaultValue: 'This field has an invalid value',
  error: 'Summary must be at least 20 characters long.',
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Read-only details',
  defaultValue: 'This area is disabled in the current state.',
  helperText: 'Editing is unavailable.',
  disabled: true,
};
