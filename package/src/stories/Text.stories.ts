import type { Meta, StoryObj } from "@storybook/react";

import Text from "../components/Text/Text";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Example",
    size: "text-md",
    weight: "regular",
  },
  argTypes: {
    size: {
      control: "radio",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Example",
  },
};

export const TextSM: Story = {
  args: {
    children: "Text SM",
    size: "text-sm",
  },
};

export const TextXL: Story = {
  args: {
    children: "Text XL",
    size: "text-xl",
  },
};
