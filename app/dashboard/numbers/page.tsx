"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Smartphone, MessageSquare, Phone, Globe, Star, Coins } from "lucide-react"
import { useRouter } from "next/navigation"
import { EmptyState } from "@/components/empty-state"
import { LoadingSpinner } from "@/components/loading-spinner"
import { useToastContext } from "@/components/toast-provider"
import { useNotifications } from "@/hooks/use-notifications"

const countries = [
  { code: "US", name: "United States", flag: "🇺🇸", available: 25, total: 50 },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧", available: 18, total: 30 },
  { code: "CA", name: "Canada", flag: "🇨🇦", available: 12, total: 25 },
  { code: "FR", name: "France", flag: "🇫🇷", available: 8, total: 20 },
  { code: "DE", name: "Germany", flag: "🇩🇪", available: 15, total: 30 },
  { code: "AU", name: "Australia", flag: "🇦🇺", available: 5, total: 15 },
  { code: "JP", name: "Japan", flag: "🇯🇵", available: 0, total: 10 },
  { code: "IN", name: "India", flag: "🇮🇳", available: 30, total: 40 },
]

const availableNumbers = [
  {
    id: 1,
    number: "+1 (555) 123-4567",
    country: "US",
    type: "SMS + Voice",
    price: 750,
    popular: true,
    available: true,
  },
  { id: 2, number: "+1 (555) 987-6543", country: "US", type: "SMS", price: 450, popular: false, available: true },
  {
    id: 3,
    number: "+44 (20) 7946-0958",
    country: "UK",
    type: "SMS + Voice",
    price: 675,
    popular: true,
    available: true,
  },
  { id: 4, number: "+44 (20) 7946-0123", country: "UK", type: "SMS", price: 375, popular: false, available: false },
  { id: 5, number: "+33 1 42 86 83 26", country: "FR", type: "SMS", price: 300, popular: false, available: true },
  {
    id: 6,
    number: "+49 30 12345678",
    country: "DE",
    type: "SMS + Voice",
    price: 525,
    popular: false,
    available: false,
  },
]

export default function BuyNumbersPage() {
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // Add these hooks:
  const { toast } = useToastContext()
  const { addNotification } = useNotifications()

  const filteredNumbers = availableNumbers.filter((number) => {
    const matchesCountry = selectedCountry === "all" || number.country === selectedCountry
    const matchesType = selectedType === "all" || number.type.includes(selectedType)
    const matchesSearch = !searchQuery || number.number.includes(searchQuery)
    return matchesCountry && matchesType && matchesSearch
  })

  // Replace the handleBuyNumber function with:
  const handleBuyNumber = (numberId: number, price: number) => {
    const currentBalance = 1250
    const number = availableNumbers.find((n) => n.id === numberId)

    if (currentBalance >= price && number) {
      toast({
        title: "Number Purchased!",
        description: `Successfully purchased ${number.number} for ${price} coins.`,
        type: "success",
      })

      addNotification({
        title: "New Number Activated",
        message: `Your number ${number.number} is now active and ready to use.`,
        type: "success",
      })

      // Update the number as unavailable (simulate purchase)
      const updatedNumbers = availableNumbers.map((n) => (n.id === numberId ? { ...n, available: false } : n))
      // In real app, this would update state properly
    } else {
      toast({
        title: "Insufficient Coins",
        description: `You need ${price} coins but only have ${currentBalance}. Please recharge your account.`,
        type: "error",
      })

      setTimeout(() => {
        router.push("/dashboard/recharge")
      }, 2000)
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Buy Numbers</h1>
        <p className="text-muted-foreground">Choose from our global inventory of phone numbers</p>
      </div>

      <Tabs defaultValue="browse" className="space-y-6">
        <TabsList>
          <TabsTrigger value="browse">Browse Numbers</TabsTrigger>
          <TabsTrigger value="countries">By Country</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="search">Search Number</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="search"
                      placeholder="Search by number..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Country</Label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger>
                      <SelectValue placeholder="All countries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All countries</SelectItem>
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.flag} {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Type</Label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All types</SelectItem>
                      <SelectItem value="SMS">SMS Only</SelectItem>
                      <SelectItem value="Voice">Voice Only</SelectItem>
                      <SelectItem value="SMS + Voice">SMS + Voice</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Availability</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All numbers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All numbers</SelectItem>
                      <SelectItem value="available">Available only</SelectItem>
                      <SelectItem value="unavailable">Unavailable only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Available Numbers */}
          {isLoading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner size="lg" />
            </div>
          ) : filteredNumbers.length === 0 ? (
            <EmptyState
              icon={Smartphone}
              title="No numbers found"
              description="Try adjusting your filters or check back later for new numbers."
              actionLabel="Clear Filters"
              onAction={() => {
                setSelectedCountry("all")
                setSelectedType("all")
                setSearchQuery("")
              }}
            />
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredNumbers.map((number, index) => (
                <Card
                  key={number.id}
                  className={`transition-all card-hover animate-fade-in ${number.available ? "hover:shadow-md" : "opacity-50"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${number.available ? "bg-primary/10" : "bg-gray-200"}`}
                        >
                          <Smartphone className={`h-6 w-6 ${number.available ? "text-primary" : "text-gray-400"}`} />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <p className={`text-lg font-semibold ${!number.available && "text-gray-500"}`}>
                              {number.number}
                            </p>
                            {number.popular && number.available && (
                              <Badge variant="secondary" className="flex items-center">
                                <Star className="h-3 w-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                            {!number.available && <Badge variant="destructive">Unavailable</Badge>}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Globe className="h-4 w-4 mr-1" />
                              {countries.find((c) => c.code === number.country)?.name}
                            </span>
                            <span className="flex items-center">
                              {number.type.includes("SMS") && <MessageSquare className="h-4 w-4 mr-1" />}
                              {number.type.includes("Voice") && <Phone className="h-4 w-4 mr-1" />}
                              {number.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="flex items-center text-lg font-bold">
                            <span className="text-sm mr-1">₦</span>
                            <Coins className="h-4 w-4 mr-1 text-primary" />
                            {number.price}
                          </div>
                          <p className="text-sm text-muted-foreground">per month</p>
                        </div>
                        <Button disabled={!number.available} onClick={() => handleBuyNumber(number.id, number.price)}>
                          {number.available ? "Buy Now" : "Unavailable"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="countries" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country) => (
              <Card
                key={country.code}
                className={`transition-shadow cursor-pointer ${country.available > 0 ? "hover:shadow-md" : "opacity-50"}`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="text-2xl">{country.flag}</span>
                    <span>{country.name}</span>
                  </CardTitle>
                  <CardDescription>
                    {country.available > 0 ? `${country.available} available` : "No numbers available"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Available:</span>
                      <span className={`font-medium ${country.available > 0 ? "text-green-600" : "text-red-600"}`}>
                        {country.available}/{country.total}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>SMS support:</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Voice support:</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <Button
                      className="w-full mt-4"
                      disabled={country.available === 0}
                      onClick={() => setSelectedCountry(country.code)}
                    >
                      {country.available > 0 ? "Browse Numbers" : "Out of Stock"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
