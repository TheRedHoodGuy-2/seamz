import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, Filter, CreditCard, Bitcoin, CheckCircle, Clock, XCircle, History } from "lucide-react"
import { EmptyState } from "@/components/empty-state"

const transactions = [
  {
    id: "TXN-001",
    date: "2024-01-15",
    amount: 45,
    coins: 550,
    method: "Credit Card",
    status: "completed",
    reference: "ch_3OqIC92eZvKYlo2C0EXAMPLE",
  },
  {
    id: "TXN-002",
    date: "2024-01-10",
    amount: 80,
    coins: 1150,
    method: "Bitcoin",
    status: "completed",
    reference: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  },
  {
    id: "TXN-003",
    date: "2024-01-05",
    amount: 10,
    coins: 100,
    method: "Credit Card",
    status: "pending",
    reference: "ch_3OqIC92eZvKYlo2C0PENDING",
  },
  {
    id: "TXN-004",
    date: "2024-01-01",
    amount: 200,
    coins: 3000,
    method: "Credit Card",
    status: "completed",
    reference: "ch_3OqIC92eZvKYlo2C0EXAMPLE2",
  },
  {
    id: "TXN-005",
    date: "2023-12-28",
    amount: 25,
    coins: 250,
    method: "Ethereum",
    status: "failed",
    reference: "0x742d35Cc6634C0532925a3b8D404fddBD4f3",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "pending":
      return <Clock className="h-4 w-4 text-yellow-500" />
    case "failed":
      return <XCircle className="h-4 w-4 text-red-500" />
    default:
      return null
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return (
        <Badge variant="secondary" className="bg-green-100 text-green-800">
          Completed
        </Badge>
      )
    case "pending":
      return (
        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
          Pending
        </Badge>
      )
    case "failed":
      return <Badge variant="destructive">Failed</Badge>
    default:
      return null
  }
}

const getMethodIcon = (method: string) => {
  if (method.includes("Card")) {
    return <CreditCard className="h-4 w-4" />
  }
  return <Bitcoin className="h-4 w-4" />
}

export default function HistoryPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Recharge History</h1>
          <p className="text-gray-600">View all your coin purchase transactions</p>
        </div>
        <Button variant="outline" className="mt-4 sm:mt-0">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$360.00</div>
            <p className="text-xs text-muted-foreground">Across 5 transactions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Coins Purchased</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,050</div>
            <p className="text-xs text-muted-foreground">Including bonus coins</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">80%</div>
            <p className="text-xs text-muted-foreground">4 of 5 transactions successful</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="mr-2 h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search transactions..." className="pl-10" />
            </div>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
              <option value="">All statuses</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
              <option value="">All methods</option>
              <option value="card">Credit Card</option>
              <option value="crypto">Cryptocurrency</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>A complete list of all your recharge transactions</CardDescription>
        </CardHeader>
        <CardContent>
          {transactions.length === 0 ? (
            <EmptyState
              icon={History}
              title="No transactions yet"
              description="Your recharge history will appear here once you make your first purchase."
              actionLabel="Recharge Now"
              onAction={() => (window.location.href = "/dashboard/recharge")}
            />
          ) : (
            <div className="space-y-4">
              {transactions.map((transaction, index) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      {getMethodIcon(transaction.method)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium">{transaction.id}</p>
                        {getStatusIcon(transaction.status)}
                      </div>
                      <p className="text-sm text-gray-500">
                        {new Date(transaction.date).toLocaleDateString()} • {transaction.method}
                      </p>
                      <p className="text-xs text-gray-400 font-mono">{transaction.reference}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-medium">${transaction.amount}</p>
                      <p className="text-sm text-gray-500">{transaction.coins.toLocaleString()} coins</p>
                    </div>
                    {getStatusBadge(transaction.status)}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-500">Showing 1 to 5 of 5 transactions</p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
