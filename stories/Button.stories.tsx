import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from '../src';

const meta: Meta = {
  title: 'Component/Button',
  component: Button,
  argTypes: {
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


export const MyButton: StoryFn<ButtonProps> = args => {
  return <Button {...args} />
}

MyButton.args = {
  color: 'primary',
  children: "teste!"
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
// export const Default = Template.bind({});
// Default.args = {};
