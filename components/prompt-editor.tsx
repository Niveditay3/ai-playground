"use client"

import type React from "react"

import { useState } from "react"
import { Save, Send, Trash2 } from "lucide-react"

interface PromptEditorProps {
  selectedModel: string
  onSubmit: (prompt: string) => void
  isLoading?: boolean
  promptValue?: string
  onPromptChange?: (value: string) => void
}

export function PromptEditor({
  selectedModel,
  onSubmit,
  isLoading = false,
  promptValue = "",
  onPromptChange,
}: PromptEditorProps) {
  const [localPrompt, setLocalPrompt] = useState("")
  const prompt = promptValue !== undefined ? promptValue : localPrompt

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (onPromptChange) {
      onPromptChange(value)
    } else {
      setLocalPrompt(value)
    }
  }

  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    try {
      // Mock save
      console.log("Saving prompt:", prompt)
    } finally {
      setIsSaving(false)
    }
  }

  const handleClear = () => {
    if (onPromptChange) {
      onPromptChange("")
    } else {
      setLocalPrompt("")
    }
  }

  const handleSubmit = () => {
    if (prompt.trim()) {
      onSubmit(prompt)
      handleClear()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Cmd/Ctrl + Enter to submit
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault()
      handleSubmit()
    }
    // Cmd/Ctrl + K to clear
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault()
      handleClear()
    }
  }

  return (
    <div
      className="flex flex-col gap-3 bg-card border border-border rounded-lg p-4 flex-1 min-h-0"
      role="region"
      aria-label="Prompt editor"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-foreground">Prompt</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Model: <span className="text-primary font-medium">{selectedModel}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            disabled={isSaving || !prompt}
            className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 disabled:opacity-50 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Save prompt to templates"
            type="button"
          >
            <Save className="w-4 h-4" aria-hidden="true" />
            Save
          </button>
          <button
            onClick={handleClear}
            className="flex items-center gap-2 px-3 py-2 bg-destructive/10 text-destructive rounded-lg hover:bg-destructive/20 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-destructive"
            aria-label="Clear prompt"
            type="button"
          >
            <Trash2 className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <textarea
        value={prompt}
        onChange={handlePromptChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter your prompt here... Start with a clear instruction and provide context for better results."
        className="flex-1 bg-secondary text-foreground placeholder-muted-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        aria-label="Prompt input"
        spellCheck="true"
        aria-describedby="keyboard-hints"
        disabled={isLoading}
      />

      <div id="keyboard-hints" className="text-xs text-muted-foreground sr-only">
        Keyboard shortcuts: Ctrl+Enter to submit, Ctrl+K to clear
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleSubmit}
          disabled={!prompt || isLoading}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 disabled:opacity-50 transition-all font-medium focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Submit prompt to AI model"
          type="button"
        >
          <Send className="w-4 h-4" aria-hidden="true" />
          {isLoading ? "Submitting..." : "Submit Prompt"}
        </button>
      </div>
    </div>
  )
}
