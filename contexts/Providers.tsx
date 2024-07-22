'use client'

import { CSPostHogProvider } from "./CSPostHogProvider"
import { ThemeProvider } from "@/components/providers/theme-provider";
import TermlyProvider from "./TermlyProvider";

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
                <TermlyProvider dataId={'eyJhbGciOiJIUzI1NiJ9.IkFCN0dKRkZHV0cxSHlVcEFNaWYzRTlLYSt5aTlNTlNrMDFCUjM5NWFKTzNlbGU5Z0hRcStZcVFPTU1DODF5a1JjcjI0ZStFUTQrWUNibDZBT00yVDd3MUJ2LzArdVJYTzNINjFKRG1NTzBTc0pKTEl4Sm1BcW1VMjdSZjdqWnZOUUdSUUlyaFZqSWljQnJWUWswRzFYWUxGMUE9PS0takpmR0JaQ0l6bEh1RTBIZi0tMUE4OS9JVFVRTzJxdUxvSlBXR1RvZz09Ig.d4XT6GzRPSJ-KsFpvRqq_5wNtmrgDYBCBA2NZo1QHao'} />
            </ThemeProvider>
        </CSPostHogProvider>
    )
}