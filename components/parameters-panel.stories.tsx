"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { ParametersPanel } from "@/components/parameters-panel"
import { useState } from "react"

const meta = {
  title: "Components/ParametersPanel",
  component: ParametersPanel,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof ParametersPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [params, setParams] = useState({
      temperature: 0.7,
      maxTokens: 2048,
      topP: 1,
    })
    return <ParametersPanel parameters={params} onChange={setParams} className="flex" />
  },
}

export const Conservative: Story = {
  render: () => {
    const [params, setParams] = useState({
      temperature: 0.2,
      maxTokens: 1024,
      topP: 0.9,
    })
    return <ParametersPanel parameters={params} onChange={setParams} className="flex" />
  },
}

export const Creative: Story = {
  render: () => {
    const [params, setParams] = useState({
      temperature: 1.5,
      maxTokens: 4096,
      topP: 1,
    })
    return <ParametersPanel parameters={params} onChange={setParams} className="flex" />
  },
}
