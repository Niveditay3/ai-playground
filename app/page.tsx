"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { PromptEditor } from "@/components/prompt-editor"
import { ParametersPanel } from "@/components/parameters-panel"
import { ChatOutput } from "@/components/chat-output"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [selectedModel, setSelectedModel] = useState("gpt-4")
  const [templates, setTemplates] = useState<any[]>([])
  const [parameters, setParameters] = useState({
    temperature: 0.7,
    maxTokens: 2048,
    topP: 1,
  })
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([])
  const [isLoading, setIsLoading] = useState(false)
  const [promptText, setPromptText] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/templates")
        const data = await res.json()
        setTemplates(data.templates || [])
      } catch (error) {
        console.error("Failed to fetch templates:", error)
      }
    }
    fetchData()
  }, [])

  const handleSubmitPrompt = async (prompt: string) => {
    if (!prompt.trim()) return

    const userMessage = { role: "user", content: prompt }
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          model: selectedModel,
          parameters,
        }),
      })

      const data = await response.json()
      const assistantMessage = { role: "assistant", content: data.response || "No response received" }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error submitting prompt:", error)
      const errorMessage = { role: "assistant", content: `Error: ${(error as Error).message}` }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSelectTemplate = (templatePrompt: string) => {
    setPromptText(templatePrompt)
  }

  const handleClearConversation = () => {
    setMessages([])
    setPromptText("")
  }

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          selectedModel={selectedModel}
          onSelectModel={setSelectedModel}
          templates={templates}
          onSelectTemplate={handleSelectTemplate}
        />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            onClearConversation={handleClearConversation}
          />

          <div className="flex-1 flex gap-4 p-4 overflow-hidden">
            <div className="flex-1 flex flex-col gap-4 min-w-0">
              <PromptEditor
                selectedModel={selectedModel}
                onSubmit={handleSubmitPrompt}
                isLoading={isLoading}
                promptValue={promptText}
                onPromptChange={setPromptText}
              />
              <ChatOutput isLoading={isLoading} messages={messages} />
            </div>

            <ParametersPanel parameters={parameters} onChange={setParameters} className="hidden lg:flex" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
