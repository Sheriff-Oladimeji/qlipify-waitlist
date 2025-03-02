import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Qlipify - Transform Your YouTube Learning Experience",
  description:
    "Turn long YouTube videos into concise, interactive study materials. Get summaries, quizzes, flashcards, and an AI study buddy in seconds.",
  keywords:
    "youtube learning, video summary, study tools, transform learning, educational app, youtube to notes, video to flashcards",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

