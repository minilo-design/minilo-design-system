import React from 'react';
import CardSmall from './CardSmall';
import { ReactComponent as SampleIcon } from '../../assets/Invite.svg';

export default {
  title: 'Components/Cards/CardSmall',
  component: CardSmall,
};

const Template = (args) => <CardSmall {...args} />;

export const Default = Template.bind({});
Default.args = {
  headline: 'Headline Text',
  text: 'Supporting text for the card goes here.',
  icon: SampleIcon,
  onClick: () => alert('Apply Now clicked!'),
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  headline: '',
  text: '',
  loading: true,
};
