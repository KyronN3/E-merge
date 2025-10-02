import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components2/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components2/ui/chart"
import { Button } from "@/components2/ui/button"

const chartData = [
  { date: "Apr 6", expected: 450, total: 380 },
  { date: "Apr 12", expected: 470, total: 420 },
  { date: "Apr 18", expected: 480, total: 390 },
  { date: "Apr 24", expected: 490, total: 440 },
  { date: "Apr 30", expected: 500, total: 460 },
  { date: "May 6", expected: 520, total: 500 },
  { date: "May 12", expected: 530, total: 520 },
  { date: "May 18", expected: 540, total: 510 },
  { date: "May 24", expected: 550, total: 530 },
  { date: "May 30", expected: 560, total: 540 },
  { date: "Jun 5", expected: 570, total: 550 },
  { date: "Jun 11", expected: 580, total: 560 },
  { date: "Jun 17", expected: 590, total: 570 },
  { date: "Jun 23", expected: 600, total: 580 },
  { date: "Jun 30", expected: 610, total: 590 },
]

const chartConfig = {
  expected: {
    label: "Expected",
    color: "hsl(var(--chart-1))",
  },
  total: {
    label: "Total",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function BusinessVisitorChart() {
  return (
    <Card className="bg-gray-900 text-white border-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white">Total/Expected Visitors</CardTitle>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="bg-gray-700 text-white hover:bg-gray-600">
              Last 3 months
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              Last 30 days
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              Last 7 days
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} stroke="#374151" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="expected"
              type="natural"
              fill="var(--color-expected)"
              fillOpacity={0.4}
              stroke="var(--color-expected)"
              stackId="a"
            />
            <Area
              dataKey="total"
              type="natural"
              fill="var(--color-total)"
              fillOpacity={0.4}
              stroke="var(--color-total)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
        <div className="flex items-center gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-400">Expected</span>
            <span className="text-white font-medium">520</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-600"></div>
            <span className="text-gray-400">Total</span>
            <span className="text-white font-medium">498</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
