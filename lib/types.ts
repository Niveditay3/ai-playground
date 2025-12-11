export interface Model {
  id: string
  name: string
  description: string
  maxTokens: number
}

export interface Template {
  id: number
  name: string
  prompt: string
}

export interface Parameters {
  temperature: number
  maxTokens: number
  topP: number
}

export interface ChatMessage {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}
