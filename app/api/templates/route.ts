export async function GET() {
  const templates = [
    {
      id: 1,
      name: "Blog Post Writing",
      prompt: "Write a blog post about [topic] in [style]. Include: [section 1], [section 2], [section 3].",
    },
    {
      id: 2,
      name: "Code Review",
      prompt:
        "Review the following code for: performance, security, readability, and best practices.\n\nCode:\n[paste code here]",
    },
    {
      id: 3,
      name: "Email Draft",
      prompt: "Write a professional email to [recipient] about [subject]. Tone: [formal/casual].",
    },
    {
      id: 4,
      name: "Brainstorming",
      prompt:
        "Generate 5 creative ideas for [project/problem]. For each idea, provide: overview, benefits, challenges.",
    },
  ]

  return Response.json({ templates })
}
