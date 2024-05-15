import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        color: "primary",
        children: "Click me!",
        size: "sm",
    },
};