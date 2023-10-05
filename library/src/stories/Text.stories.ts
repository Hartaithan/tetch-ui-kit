import type { Meta, StoryObj } from "@storybook/react";

import Text from "../components/Text/Text";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    td: {
      options: ["none", "line-through", "underline"],
      control: { type: "radio" },
    },
    tt: {
      options: ["none", "capitalize", "lowercase", "uppercase"],
      control: { type: "radio" },
    },
    ta: {
      options: ["center", "end", "left", "right", "start"],
      control: { type: "radio" },
    },
    size: {
      control: { type: "range", min: 12, max: 64, step: 1 },
    },
    fw: {
      control: { type: "range", min: 100, max: 900, step: 100 },
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

export const TypographyDisplayXXL: Story = {
  args: {
    children: "Display XXL",
    tg: "display-xxl",
  },
};
