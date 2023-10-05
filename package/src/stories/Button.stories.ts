import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Example",
  },
};

export const SizeXXL: Story = {
  args: {
    children: "XXL size",
    size: "xxl",
  },
};

export const ColorBlue: Story = {
  args: {
    children: "Blue color",
    c: "blue",
  },
};
