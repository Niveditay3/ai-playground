import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "destructive"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: "Click me", variant: "default" },
}

export const Primary: Story = {
  args: { children: "Submit", variant: "primary" },
}

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
}
