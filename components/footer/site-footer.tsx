"use client"

import * as React from "react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "../icons"
import { ModeToggle } from "../ui/mode-toggle"
import { useIntl } from "react-intl"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const t = useIntl();
  const title = t.formatMessage({ id: `footerTitle`, defaultMessage: "Todos los derechos reservados." });
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            {siteConfig.name} &copy; {new Date().getFullYear()}. {title}
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  )
}
