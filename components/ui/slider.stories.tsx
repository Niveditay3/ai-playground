"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState([50])
    return <Slider value={value} onValueChange={setValue} className="w-64" />
  },
}

export const Temperature: Story = {
  render: () => {
    const [value, setValue] = useState([0.7])
    return (
      <div className="w-64 space-y-4">
        <Slider value={value} onValueChange={setValue} min={0} max={2} step={0.1} />
        <p className="text-sm">Temperature: {value[0].toFixed(2)}</p>
      </div>
    )
  },
}
