import type { Meta, StoryObj } from "@storybook/react";

import { Card, CardHeader } from "./Card";

const meta: Meta<typeof Card> = {
    component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        children: (
            <>
                <CardHeader>
                    <h1 className="text-2xl font-bold">コマリ！コマリ！</h1>
                </CardHeader>
                <p>一億年に一度の美少女</p>
            </>
        ),
        className: "max-w-lg",
    },
};
