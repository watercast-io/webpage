'use client'

import { CSPostHogProvider } from "./CSPostHogProvider"
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function AppProviders({ children }) {
    return (
        <CSPostHogProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
            {children}
            </ThemeProvider>
        </CSPostHogProvider>
    )
}