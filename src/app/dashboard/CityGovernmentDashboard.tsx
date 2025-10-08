import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { BusinessLeaderboardTable } from "@/components/business-leaderboard-table";

import { SiteHeader } from "@/components/site-header";
import { CarouselDemo } from "@/components/carousel";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { useEffect } from "react";
import { useBusinessService } from "@/Service/Business-Service";
import { useBusinessStore } from "@/store/Business-store";

export default function Page() {
  const { getAllBusiness } = useBusinessService();
  const { getBusiness } = useBusinessStore();

  useEffect(() => {
    const fetchBusiness = async () => {
      await getAllBusiness();
    };

    fetchBusiness();
  }, [getAllBusiness]);

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
              <CarouselDemo />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <div className="px-4 lg:px-6">
                <BusinessLeaderboardTable data={getBusiness()} />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
