"use client"

import { Slider } from "@/components/ui/slider"

interface ParametersPanelProps {
  parameters: {
    temperature: number
    maxTokens: number
    topP: number
  }
  onChange: (params: any) => void
  className?: string
}

const DEFAULT_PARAMETERS = {
  temperature: 0.7,
  maxTokens: 2048,
  topP: 1,
}

export function ParametersPanel({ parameters, onChange, className }: ParametersPanelProps) {
  const handleReset = () => {
    onChange(DEFAULT_PARAMETERS)
  }

  return (
    <div
      className={`w-72 flex flex-col gap-4 bg-card border border-border rounded-lg p-4 overflow-y-auto ${className}`}
      role="region"
      aria-label="AI model parameters"
    >
      <h2 className="font-semibold text-foreground">Parameters</h2>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-3">
            <label htmlFor="temperature" className="text-sm font-medium text-foreground">
              Temperature
            </label>
            <span
              className="text-sm font-mono bg-secondary px-2 py-1 rounded text-primary"
              aria-label={`Temperature value: ${parameters.temperature.toFixed(2)}`}
            >
              {parameters.temperature.toFixed(2)}
            </span>
          </div>
          <Slider
            id="temperature"
            value={[parameters.temperature]}
            onValueChange={(value) => onChange({ ...parameters, temperature: value[0] })}
            min={0}
            max={2}
            step={0.1}
            className="w-full"
            aria-label="Temperature control"
            aria-describedby="temp-help"
          />
          <p id="temp-help" className="text-xs text-muted-foreground mt-2">
            Higher values make output more random. Use 0-1 for focused tasks.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label htmlFor="max-tokens" className="text-sm font-medium text-foreground">
              Max Tokens
            </label>
            <span
              className="text-sm font-mono bg-secondary px-2 py-1 rounded text-primary"
              aria-label={`Maximum tokens: ${parameters.maxTokens}`}
            >
              {parameters.maxTokens}
            </span>
          </div>
          <Slider
            id="max-tokens"
            value={[parameters.maxTokens]}
            onValueChange={(value) => onChange({ ...parameters, maxTokens: value[0] })}
            min={100}
            max={4096}
            step={100}
            className="w-full"
            aria-label="Max tokens control"
            aria-describedby="tokens-help"
          />
          <p id="tokens-help" className="text-xs text-muted-foreground mt-2">
            Maximum length of the response in tokens.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label htmlFor="top-p" className="text-sm font-medium text-foreground">
              Top P
            </label>
            <span
              className="text-sm font-mono bg-secondary px-2 py-1 rounded text-primary"
              aria-label={`Top P value: ${parameters.topP.toFixed(2)}`}
            >
              {parameters.topP.toFixed(2)}
            </span>
          </div>
          <Slider
            id="top-p"
            value={[parameters.topP]}
            onValueChange={(value) => onChange({ ...parameters, topP: value[0] })}
            min={0}
            max={1}
            step={0.05}
            className="w-full"
            aria-label="Top P control"
            aria-describedby="topp-help"
          />
          <p id="topp-help" className="text-xs text-muted-foreground mt-2">
            Nucleus sampling parameter. Recommended: 0.9-1.0.
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <button
          onClick={handleReset}
          className="w-full px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Reset all parameters to default values"
          type="button"
        >
          Reset Defaults
        </button>
      </div>
    </div>
  )
}
