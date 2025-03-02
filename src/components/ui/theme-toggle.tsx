
"use client"

import { useEffect } from "react"
import { Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme } = useTheme()
  
  // Always set theme to dark on component mount
  useEffect(() => {
    setTheme("dark")
  }, [setTheme])

  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 bg-zinc-950 border border-zinc-800",
        className
      )}
      role="button"
      tabIndex={0}
      aria-label="Dark mode"
    >
      <div className="flex justify-between items-center w-full">
        <div
          className="flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 transform translate-x-0 bg-zinc-800"
        >
          <Moon 
            className="w-4 h-4 text-white" 
            strokeWidth={1.5}
          />
        </div>
      </div>
    </div>
  )
}
