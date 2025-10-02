import { IconTrendingUp, IconChevronDown } from "@tabler/icons-react"
import { Badge } from "@/components2/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components2/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components2/ui/select"

export function BusinessAnalyticsCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {/* Total Visitors Card */}
      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardDescription>Total Visitors</CardDescription>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1,250
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select defaultValue="september">
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="september">September</SelectItem>
              <SelectItem value="august">August</SelectItem>
              <SelectItem value="july">July</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Weekly Visitor Gain/Loss Card */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Weekly Visitor Gain/Loss</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            15,231
          </CardTitle>
          <Badge variant="outline">
            <IconTrendingUp />
            +20.1%
          </Badge>
        </CardHeader>
        <CardContent className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this week <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            +20.1% from last week
          </div>
        </CardContent>
      </Card>

      {/* Monthly Visitor Gain/Loss Card */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Monthly Visitor Gain/Loss</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            15,231
          </CardTitle>
          <Badge variant="outline">
            <IconTrendingUp />
            +20.1%
          </Badge>
        </CardHeader>
        <CardContent className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong monthly growth <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            +20.1% from last month
          </div>
        </CardContent>
      </Card>

      {/* Growth Rate Card */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Growth Rate</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            4.5%
          </CardTitle>
          <Badge variant="outline">
            <IconTrendingUp />
            +4.5%
          </Badge>
        </CardHeader>
        <CardContent className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance increase <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardContent>
      </Card>
    </div>
  )
}
