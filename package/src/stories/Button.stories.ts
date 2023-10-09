import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    controls: {
      exclude: "onClick",
    },
  },
  tags: ["autodocs"],
  args: {
    onClick: () => alert("I'm clicked!"),
  },
  argTypes: {
    disabled: { control: "boolean", defaultValue: false },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary",
    variant: "tertiary",
  },
};

export const SizeSM: Story = {
  args: {
    children: "Small size",
    size: "sm",
  },
};

export const SizeXXL: Story = {
  args: {
    children: "XXL size",
    size: "xxl",
  },
};