import CalculatorNav from "@/components/navigation/calculator-nav"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="container md:grid-cols-[200px_1fr] p-6">
      {/* <aside className="hidden w-[200px] flex-col md:flex">
        <CalculatorNav />
      </aside> */}
      <main className="flex w-full flex-1 flex-col overflow-hidden">
        {children}
      </main>
    </div>
  )
}
