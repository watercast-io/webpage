import { DashboardConfig } from "types"

export type CalculatorConfig = DashboardConfig;

export const calculatorConfig: DashboardConfig = {
  mainNav: [
  ],
  sidebarNav: [
    {
      title: "Resumen",
      href: "/dashboard/billing",
      icon: "post",
    },
    {
      title: "Ingreso agua",
      href: "#",
      icon: "droplet",
    },
    
    // {
    //   title: "Settings",
    //   href: "/dashboard/settings",
    //   icon: "settings",
    // },
  ],
}
