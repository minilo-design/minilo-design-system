import React from 'react';
import AlertBanner from './AlertBanner';

export default {
  title: 'Components/Feedback/Alert Banner',
  component: AlertBanner,
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    dismissible: { control: 'boolean' },
    onDismiss: { action: 'dismissed' },
  },
};

const Template = (args) => <AlertBanner {...args} />;

export const Info = Template.bind({});
Info.args = {
  title: 'Informational update',
  message: 'Minilo components were refreshed to align with the latest design tokens.',
  variant: 'info',
  dismissible: false,
};

export const Success = Template.bind({});
Success.args = {
  title: 'Saved successfully',
  message: 'Your design token changes were applied across all stories.',
  variant: 'success',
  dismissible: false,
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Review required',
  message: 'Some components are using outdated spacing values outside the token scale.',
  variant: 'warning',
  dismissible: false,
};

export const Error = Template.bind({});
Error.args = {
  title: 'Action failed',
  message: 'The publishing step could not complete. Please retry after validation.',
  variant: 'error',
  dismissible: false,
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  title: 'Temporary notice',
  message: 'You can close this message after reviewing the update.',
  variant: 'info',
  dismissible: true,
};
