
import { MainNav } from "@/components/navigation/main-nav"
import { SiteFooter } from "@/components/footer/site-footer"
import { marketingConfig } from "@/config/marketing"
import { LoginButton } from "@/components/navigation/login-item"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { siteNamespaces, siteConfig } from "@/config/site"
import ServerIntlProvider from "@/contexts/IntlProvider"
import getIntl from "@/app/intl"
import LanguageChanger from "@/components/navigation/language-changer"


export interface MarketingLayoutProps {
  children: React.ReactNode;
  params: any;
}

export default async function MarketingLayout({
  children,
  params
}: MarketingLayoutProps) {

  const intl = await getIntl(params.locale, siteNamespaces.Marketing);
  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <MainNav 
                items={marketingConfig.mainNav} 
              />
              <div className="flex flex-1 items-center space-x-4 sm:justify-end">
                
                <nav className="flex space-x-4">
                  <LanguageChanger />
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
        <SiteFooter className="border-t" />
      </div>
    </ServerIntlProvider>
  );
}
