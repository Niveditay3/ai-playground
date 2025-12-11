"use client"

import { ChevronLeft, Plus } from "lucide-react"
import { useState } from "react"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
  selectedModel: string
  onSelectModel: (model: string) => void
  templates: any[]
  onSelectTemplate: (template: string) => void
}

const MODELS = [
  { id: "gpt-4", name: "GPT-4", description: "Most capable model" },
  { id: "gpt-35-turbo", name: "GPT-3.5 Turbo", description: "Fast and efficient" },
  { id: "claude-3", name: "Claude 3", description: "Advanced reasoning" },
  { id: "gemini-pro", name: "Gemini Pro", description: "Multimodal model" },
]

export function Sidebar({ isOpen, onToggle, selectedModel, onSelectModel, templates, onSelectTemplate }: SidebarProps) {
  const [showTemplates, setShowTemplates] = useState(false)

  if (!isOpen) return null

  return (
    <aside
      className="w-64 border-r border-border bg-sidebar flex flex-col h-screen"
      role="complementary"
      aria-label="Navigation sidebar"
    >
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h2 className="font-semibold text-sidebar-foreground">Models</h2>
        <button
          onClick={onToggle}
          className="p-1 hover:bg-sidebar-accent rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close sidebar"
          type="button"
        >
          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <nav className="p-3 space-y-2" aria-label="Available AI models">
          {MODELS.map((model) => (
            <button
              key={model.id}
              onClick={() => onSelectModel(model.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                selectedModel === model.id
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "hover:bg-sidebar-accent text-sidebar-foreground"
              }`}
              aria-pressed={selectedModel === model.id}
              aria-label={`Select ${model.name}: ${model.description}`}
              role="radio"
              type="button"
            >
              <div className="font-medium text-sm">{model.name}</div>
              <div className="text-xs opacity-70">{model.description}</div>
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-border">
          <button
            onClick={() => setShowTemplates(!showTemplates)}
            className="w-full flex items-center gap-2 px-3 py-2 text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-expanded={showTemplates}
            aria-controls="templates-list"
            type="button"
          >
            <Plus className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">Templates</span>
          </button>

          {showTemplates && (
            <div id="templates-list" className="mt-2 space-y-1" role="region" aria-label="Prompt templates">
              {templates.length > 0 ? (
                templates.map((template: any, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onSelectTemplate(template.prompt)
                      setShowTemplates(false)
                    }}
                    className="w-full text-left px-3 py-2 text-xs rounded hover:bg-sidebar-accent text-sidebar-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label={`Use template: ${template.name}`}
                    type="button"
                  >
                    {template.name}
                  </button>
                ))
              ) : (
                <p className="px-3 py-2 text-xs text-sidebar-foreground opacity-50">No templates yet</p>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
