"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Users, Smartphone, Settings, Bell } from "lucide-react"

export default function AdminDashboard() {
  const [notification, setNotification] = useState("")
  const [usdtAddress, setUsdtAddress] = useState("TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE")
  const [ethAddress, setEthAddress] = useState("0x742d35Cc6634C0532925a3b8D404fddBD4f3ABCD")

  const handlePostNotification = () => {
    if (notification.trim()) {
      alert("Notification posted successfully!")
      setNotification("")
    }
  }

  const handleUpdateAddresses = () => {
    alert("Payment addresses updated successfully!")
  }

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Jenny! Here's your business overview.</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="revenue" className="space-y-6">
        <TabsList>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="payments">Payment Settings</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue (Naira)</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₦2,456,780</div>
                <p className="text-xs text-green-600">+12.5% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Crypto Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$16,340</div>
                <p className="text-xs text-green-600">+8.2% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4,856</div>
                <p className="text-xs text-green-600">+15.3% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Numbers Sold</CardTitle>
                <Smartphone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,847</div>
                <p className="text-xs text-green-600">+18.7% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Revenue (Naira)</CardTitle>
                <CardDescription>Revenue in Nigerian Naira over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { month: "Jan", revenue: 1250000 },
                    { month: "Feb", revenue: 1580000 },
                    { month: "Mar", revenue: 1890000 },
                    { month: "Apr", revenue: 2100000 },
                    { month: "May", revenue: 2280000 },
                    { month: "Jun", revenue: 2456780 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.month}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${(item.revenue / 3000000) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold">₦{item.revenue.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Crypto Revenue Breakdown</CardTitle>
                <CardDescription>Cryptocurrency payments received</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">U</span>
                      </div>
                      <div>
                        <p className="font-medium">USDT</p>
                        <p className="text-sm text-muted-foreground">Tether</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">$12,450</p>
                      <p className="text-sm text-muted-foreground">76.2%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">E</span>
                      </div>
                      <div>
                        <p className="font-medium">Ethereum</p>
                        <p className="text-sm text-muted-foreground">ETH</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">$3,890</p>
                      <p className="text-sm text-muted-foreground">23.8%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                Payment Settings
              </CardTitle>
              <CardDescription>Manage cryptocurrency wallet addresses for payments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="usdt-address">USDT Wallet Address (TRC20)</Label>
                  <Input
                    id="usdt-address"
                    value={usdtAddress}
                    onChange={(e) => setUsdtAddress(e.target.value)}
                    className="font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eth-address">Ethereum Wallet Address (ERC20)</Label>
                  <Input
                    id="eth-address"
                    value={ethAddress}
                    onChange={(e) => setEthAddress(e.target.value)}
                    className="font-mono"
                  />
                </div>

                <Button onClick={handleUpdateAddresses}>Update Payment Addresses</Button>
              </div>

              <div className="pt-6 border-t">
                <h3 className="font-semibold mb-4">Payment Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Naira Payments</p>
                    <p className="text-2xl font-bold">847</p>
                    <p className="text-sm text-green-600">+12% this month</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">USDT Payments</p>
                    <p className="text-2xl font-bold">234</p>
                    <p className="text-sm text-green-600">+8% this month</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">ETH Payments</p>
                    <p className="text-2xl font-bold">89</p>
                    <p className="text-sm text-green-600">+15% this month</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Post Notification
              </CardTitle>
              <CardDescription>Send notifications to all users on the dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="notification">Notification Message</Label>
                <Textarea
                  id="notification"
                  placeholder="Enter your notification message here..."
                  value={notification}
                  onChange={(e) => setNotification(e.target.value)}
                  rows={4}
                />
              </div>
              <Button onClick={handlePostNotification} disabled={!notification.trim()}>
                Post Notification
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">System Maintenance</p>
                  <p className="text-sm text-muted-foreground">Scheduled maintenance on Sunday 2AM - 4AM WAT</p>
                  <p className="text-xs text-muted-foreground">Posted 2 days ago</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">New Countries Added</p>
                  <p className="text-sm text-muted-foreground">We've added phone numbers from 5 new countries!</p>
                  <p className="text-xs text-muted-foreground">Posted 1 week ago</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">Price Update</p>
                  <p className="text-sm text-muted-foreground">Updated pricing for US and UK numbers</p>
                  <p className="text-xs text-muted-foreground">Posted 2 weeks ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
