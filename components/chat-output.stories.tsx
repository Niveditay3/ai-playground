import type { Meta, StoryObj } from "@storybook/react"
import { ChatOutput } from "@/components/chat-output"

const meta = {
  title: "Components/ChatOutput",
  component: ChatOutput,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof ChatOutput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isLoading: false,
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}
