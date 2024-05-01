
import { MainNav } from "@/components/navigation/main-nav"
import { SiteFooter } from "@/components/footer/site-footer"
import { marketingConfig } from "@/config/marketing"
import { UserAccountNav } from "@/components/navigation/user-account-nav"
import { terminateSession } from "@/lib/auth/session"
import { LoginButton } from "@/components/navigation/login-item"
import { getUser } from "@/lib/auth/auth-kit"

export interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {

  const signOutUser = async () => {
    "use server"
    await terminateSession();
  }

  const { isAuthenticated } = await getUser();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40 border-b bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav 
            items={marketingConfig.mainNav} 
          />
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
