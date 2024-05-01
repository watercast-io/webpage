import { MainNav } from "@/components/navigation/main-nav"
import { SiteFooter } from "@/components/footer/site-footer"
import { UserAccountNav } from "@/components/navigation/user-account-nav"
import { dashboardConfig } from "@/config/dashboard"
import DashboardNav from "@/components/navigation/dashboard-nav"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
          <UserAccountNav signOutUser={async () => 
            {
              "use server"
            } } />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  )
}
