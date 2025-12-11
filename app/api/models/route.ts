export async function GET() {
  const models = [
    {
      id: "gpt-4",
      name: "GPT-4",
      description: "Most capable, best for complex tasks",
      maxTokens: 8192,
    },
    {
      id: "gpt-35-turbo",
      name: "GPT-3.5 Turbo",
      description: "Fast and efficient",
      maxTokens: 4096,
    },
    {
      id: "claude-3",
      name: "Claude 3",
      description: "Advanced reasoning and analysis",
      maxTokens: 200000,
    },
    {
      id: "gemini-pro",
      name: "Gemini Pro",
      description: "Multimodal capabilities",
      maxTokens: 32768,
    },
  ]

  return Response.json({ models })
}
