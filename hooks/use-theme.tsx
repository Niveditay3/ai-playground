"use client"

import { useTheme as useNextTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return {
      isDark: false,
      toggleTheme: () => {},
      theme: "light",
    }
  }

  const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark")

  return {
    isDark,
    toggleTheme: () => setTheme(isDark ? "light" : "dark"),
    theme: theme || "light",
  }
}
