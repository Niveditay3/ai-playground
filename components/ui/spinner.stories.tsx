import type { Meta, StoryObj } from "@storybook/react"
import { Spinner } from "@/components/ui/spinner"

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  render: () => <Spinner className="w-4 h-4" />,
}

export const Large: Story = {
  render: () => <Spinner className="w-12 h-12" />,
}
