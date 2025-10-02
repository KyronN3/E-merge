import { AppSidebar } from "@/components2/app-sidebar"
import { BusinessAnalyticsCards } from "@/components2/business-analytics-cards"
import { ChartAreaInteractive } from "@/components2/chart-area-interactive"
import { BusinessVisitorTable } from "@/components2/business-visitor-table"
import { BusinessReviewsCarousel } from "@/components2/business-reviews-carousel"
import { SiteHeader } from "@/components2/site-header"

import {  
  SidebarInset,
  SidebarProvider,
} from "@/components2/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* Analytics Cards */}
              <BusinessAnalyticsCards />
              
              {/* Chart Area */}
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              
              {/* Bottom Section: Table and Reviews */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-6">
                <BusinessVisitorTable />
                <BusinessReviewsCarousel />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
