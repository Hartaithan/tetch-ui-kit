import type { Meta, StoryObj } from "@storybook/react";

import Input from "../components/Input/Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["inputClassName", "labelClassName", "hintClassName"],
    },
  },
  tags: ["autodocs"],
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    value: "Disabled",
    disabled: true,
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "Enter your value",
  },
};

export const Label: Story = {
  args: {
    label: "Label",
  },
};

export const Hint: Story = {
  args: {
    hint: "Hint",
  },
};
