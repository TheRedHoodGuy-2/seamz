"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Coins, TrendingUp, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [extendingNumber, setExtendingNumber] = useState<string | null>(null)

  const handleExtendNumber = (numberId: string, cost: number) => {
    setExtendingNumber(numberId)

    // Simulate extending number
    setTimeout(() => {
      alert(`Number extended successfully! ${cost} coins deducted from your account.`)
      setExtendingNumber(null)
    }, 1000)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your account.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Active Numbers", value: "12", icon: Smartphone },
          { title: "Coin Balance", value: "1,250", icon: Coins },
          { title: "Total Spent", value: "₦13,425", icon: TrendingUp },
        ].map((stat, index) => (
          <Card key={stat.title} className="animate-fade-in card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.title === "Active Numbers"
                  ? "Currently active"
                  : stat.title === "Coin Balance"
                    ? "Available coins"
                    : "This month"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest number rentals and transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Number +1 (555) 123-4567 activated</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Recharged 500 coins for ₦7,500</p>
                  <p className="text-sm text-muted-foreground">1 day ago</p>
                </div>
                <Badge variant="outline">+500</Badge>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Number +44 (20) 7946-0958 expired</p>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                </div>
                <Badge variant="destructive">Expired</Badge>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Number +33 1 42 86 83 26 activated</p>
                  <p className="text-sm text-muted-foreground">3 days ago</p>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <Button className="justify-start h-auto p-4 hover-lift" variant="outline" asChild>
                <Link href="/dashboard/numbers">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Buy New Number</div>
                      <div className="text-sm text-muted-foreground">Get a new phone number instantly</div>
                    </div>
                  </div>
                </Link>
              </Button>

              <Button className="justify-start h-auto p-4 hover-lift" variant="outline" asChild>
                <Link href="/dashboard/recharge">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Coins className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Recharge Coins</div>
                      <div className="text-sm text-muted-foreground">Add more coins to your account</div>
                    </div>
                  </div>
                </Link>
              </Button>

              <Button className="justify-start h-auto p-4 hover-lift" variant="outline" asChild>
                <Link href="/dashboard/history">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">View History</div>
                      <div className="text-sm text-muted-foreground">Check your transaction history</div>
                    </div>
                  </div>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Numbers */}
      <Card>
        <CardHeader>
          <CardTitle>Active Numbers</CardTitle>
          <CardDescription>Manage your currently active phone numbers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">United States • Expires in 2 days</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">SMS</Badge>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={extendingNumber === "us-number"}
                  onClick={() => handleExtendNumber("us-number", 750)}
                >
                  {extendingNumber === "us-number" ? "Extending..." : "Extend (750 coins)"}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">+44 (20) 7946-0958</p>
                  <p className="text-sm text-muted-foreground">United Kingdom • Expires in 5 days</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">Voice + SMS</Badge>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={extendingNumber === "uk-number"}
                  onClick={() => handleExtendNumber("uk-number", 675)}
                >
                  {extendingNumber === "uk-number" ? "Extending..." : "Extend (675 coins)"}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">+33 1 42 86 83 26</p>
                  <p className="text-sm text-muted-foreground">France • Expires in 1 week</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">SMS</Badge>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={extendingNumber === "fr-number"}
                  onClick={() => handleExtendNumber("fr-number", 300)}
                >
                  {extendingNumber === "fr-number" ? "Extending..." : "Extend (300 coins)"}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
