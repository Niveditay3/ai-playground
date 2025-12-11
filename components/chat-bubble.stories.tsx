import type { Meta, StoryObj } from "@storybook/react"

const ChatBubble = ({
  message,
  isUser,
}: {
  message: string
  isUser: boolean
}) => (
  <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
    <div
      className={`max-w-xs px-4 py-2 rounded-lg ${
        isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
      }`}
    >
      {message}
    </div>
  </div>
)

const meta = {
  title: "Components/ChatBubble",
  component: ChatBubble,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ChatBubble>

export default meta
type Story = StoryObj<typeof meta>

export const UserMessage: Story = {
  args: {
    message: "Hello, how can you help me?",
    isUser: true,
  },
}

export const AssistantMessage: Story = {
  args: {
    message: "I can help you with various tasks. What would you like to do?",
    isUser: false,
  },
}
