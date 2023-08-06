import React from 'react';

import {Card} from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'stories/Card',
  component: Card,
  argTypes: {
    size: { 
        optins:["small","large"],
        control:{type:'select'}
     },
  },
};
const Template = (args) => <Card {...args} />;
export const small = Template.bind({});
small.args={
  cardData:{
        "buySellIndicator": "BUYI",
        "orderStatus": "NEWO",
        "orderType": "Market"
  },
  title:"Hello",
  size:"small"
}

export const large = Template.bind({});

large.args={
  cardData:{
     
        "buySellIndicator": "BUYI",
        "orderStatus": "NEWO",
        "orderType": "Market"
      
  },
  title:"Hello",
  size:"large"
}

