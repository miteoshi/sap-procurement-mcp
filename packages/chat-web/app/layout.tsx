import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { AppShell } from "@/components/app-shell"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ConnectorProvider } from "@/hooks/use-connector"
import { VoiceSettingsProvider } from "@/hooks/use-voice-settings"
import { cn } from "@/lib/utils"

const fontSans = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Operations Assistant",
  description: "Voice and text chat over your SAP CAP MCP connector.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        fontSans.variable
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <ConnectorProvider>
              <VoiceSettingsProvider>
                <AppShell>{children}</AppShell>
              </VoiceSettingsProvider>
            </ConnectorProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
