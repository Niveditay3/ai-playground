"use client"

import { Menu, Moon, Sun, RotateCcw } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

interface HeaderProps {
  onToggleSidebar: () => void
  onClearConversation?: () => void
}

export function Header({ onToggleSidebar, onClearConversation }: HeaderProps) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="border-b border-border bg-card" role="banner">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="p-2 hover:bg-secondary rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle sidebar navigation"
            aria-expanded="true"
            type="button"
          >
            <Menu className="w-5 h-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true" />
            <h1 className="text-lg font-semibold">AI Interface</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onClearConversation && (
            <button
              onClick={onClearConversation}
              className="p-2 hover:bg-secondary rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Clear conversation history"
              title="Clear all messages"
              type="button"
            >
              <RotateCcw className="w-5 h-5" aria-hidden="true" />
            </button>
          )}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-secondary rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            type="button"
          >
            {isDark ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
