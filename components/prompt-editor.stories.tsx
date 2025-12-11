import type { Meta, StoryObj } from "@storybook/react"
import { PromptEditor } from "@/components/prompt-editor"

const meta = {
  title: "Components/PromptEditor",
  component: PromptEditor,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    selectedModel: {
      control: "select",
      options: ["gpt-4", "gpt-35-turbo", "claude-3", "gemini-pro"],
    },
  },
} satisfies Meta<typeof PromptEditor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    selectedModel: "gpt-4",
  },
}

export const WithClaude: Story = {
  args: {
    selectedModel: "claude-3",
  },
}
