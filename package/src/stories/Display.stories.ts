import type { Meta, StoryObj } from "@storybook/react";

import Display from "../components/Display/Display";

const meta = {
  title: "Components/Display",
  component: Display,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Example",
    size: "display-md",
    weight: "regular",
  },
  argTypes: {
    size: {
      control: "radio",
    },
  },
} satisfies Meta<typeof Display>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Example",
  },
};

export const DisplayXS: Story = {
  args: {
    children: "Display XS",
    size: "display-xs",
  },
};

export const DisplayXXL: Story = {
  args: {
    children: "Display XXL",
    size: "display-xxl",
  },
};
