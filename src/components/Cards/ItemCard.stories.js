import React from 'react';
import ItemCard from './ItemCard';

export default {
  title: 'Components/Cards/ItemCard',
  component: ItemCard,
};

const Template = (args) => <ItemCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
