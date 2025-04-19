import React from 'react';
import CardXS from './CardXS';

export default {
  title: 'Components/Cards/CardXS',
  component: CardXS,
  argTypes: {
    onClick: { action: 'clicked' },
    loading: { control: 'boolean' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    image: { control: 'text' },
  },
};

const Template = (args) => <CardXS {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  subtitle: 'Card Description',
  loading: false,
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  title: 'Card Title',
  subtitle: 'Card Description',
  loading: true,
};
