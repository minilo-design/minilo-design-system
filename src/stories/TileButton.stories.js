// Button.stories.js
import React from 'react';
import Button from './TileButton';
import { ReactComponent as SampleIcon } from './assets/active-icon.svg';
import  SampleImage  from './assets/sample-image.png';
export default {
  title: 'Components/Tile Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  image:()=> <img src={SampleImage} alt="Sample" style={{ width: '40px', height: '40px' }} />,
  text: 'View Photos (100)',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'Active Applications (2)',
  icon: SampleIcon,
};
