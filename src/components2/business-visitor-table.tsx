import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components2/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components2/ui/table"

const visitorData = [
  { date: "September 25, 2025", totalVisitor: 523 },
  { date: "September 24, 2025", totalVisitor: 423 },
  { date: "September 23, 2025", totalVisitor: 564 },
  { date: "September 22, 2025", totalVisitor: 400 },
  { date: "September 21, 2025", totalVisitor: 400 },
  { date: "September 20, 2025", totalVisitor: 380 },
  { date: "September 19, 2025", totalVisitor: 445 },
  { date: "September 18, 2025", totalVisitor: 502 },
  { date: "September 17, 2025", totalVisitor: 467 },
  { date: "September 16, 2025", totalVisitor: 389 },
  { date: "September 15, 2025", totalVisitor: 512 },
  { date: "September 14, 2025", totalVisitor: 478 },
  { date: "September 13, 2025", totalVisitor: 434 },
  { date: "September 12, 2025", totalVisitor: 456 },
  { date: "September 11, 2025", totalVisitor: 398 },
  { date: "September 10, 2025", totalVisitor: 521 },
  { date: "September 9, 2025", totalVisitor: 487 },
  { date: "September 8, 2025", totalVisitor: 403 },
  { date: "September 7, 2025", totalVisitor: 459 },
  { date: "September 6, 2025", totalVisitor: 492 },
  { date: "September 5, 2025", totalVisitor: 418 },
  { date: "September 4, 2025", totalVisitor: 376 },
  { date: "September 3, 2025", totalVisitor: 445 },
  { date: "September 2, 2025", totalVisitor: 503 },
  { date: "September 1, 2025", totalVisitor: 467 },
  { date: "August 31, 2025", totalVisitor: 412 },
  { date: "August 30, 2025", totalVisitor: 389 },
  { date: "August 29, 2025", totalVisitor: 456 },
  { date: "August 28, 2025", totalVisitor: 478 },
  { date: "August 27, 2025", totalVisitor: 434 },
  { date: "August 26, 2025", totalVisitor: 501 },
  { date: "August 25, 2025", totalVisitor: 387 },
  { date: "August 24, 2025", totalVisitor: 423 },
  { date: "August 23, 2025", totalVisitor: 467 },
  { date: "August 22, 2025", totalVisitor: 445 },
  { date: "August 21, 2025", totalVisitor: 392 },
  { date: "August 20, 2025", totalVisitor: 478 },
  { date: "August 19, 2025", totalVisitor: 512 },
  { date: "August 18, 2025", totalVisitor: 434 },
  { date: "August 17, 2025", totalVisitor: 398 },
]

export function BusinessVisitorTable() {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Daily Visitors</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-h-96 overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium">Date</TableHead>
                <TableHead className="font-medium text-right">Total Visitor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {visitorData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.date}</TableCell>
                  <TableCell className="text-right font-medium">{row.totalVisitor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
