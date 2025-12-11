"use client"

import { Copy, Download, RefreshCw } from "lucide-react"
import { useState } from "react"

interface ChatOutputProps {
  isLoading?: boolean
  messages?: Array<{ role: string; content: string }>
}

export function ChatOutput({ isLoading = false, messages = [] }: ChatOutputProps) {
  const [copied, setCopied] = useState(false)

  const output =
    messages.length > 0
      ? messages
          .map((msg) => {
            const label = msg.role === "user" ? "You" : "AI"
            return `${label}:\n${msg.content}`
          })
          .join("\n\n---\n\n")
      : "Submit a prompt to see the AI response here. The response will appear in this area with options to copy or download."

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([output], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `response-${Date.now()}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div
      className="flex flex-col gap-3 bg-card border border-border rounded-lg p-4 flex-1 min-h-0"
      role="region"
      aria-label="AI response output"
      aria-live="polite"
      aria-busy={isLoading}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-foreground">Output</h2>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            title="Copy response"
            className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Copy response to clipboard"
            type="button"
          >
            <Copy className="w-4 h-4" aria-hidden="true" />
          </button>
          <button
            onClick={handleDownload}
            title="Download as text"
            className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Download response as text file"
            type="button"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
          </button>
          {copied && (
            <span className="text-xs text-primary px-2 py-1 rounded bg-primary/10" role="status">
              Copied!
            </span>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-2 text-muted-foreground" role="status" aria-label="Processing request">
            <RefreshCw className="w-4 h-4 animate-spin" aria-hidden="true" />
            <span className="text-sm">Processing...</span>
          </div>
        </div>
      ) : (
        <div
          className="flex-1 bg-secondary text-foreground p-4 rounded-lg overflow-y-auto font-mono text-sm whitespace-pre-wrap break-words"
          tabIndex={0}
          role="document"
          aria-label="Response content"
        >
          {output}
        </div>
      )}
    </div>
  )
}
