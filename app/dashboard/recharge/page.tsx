"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Coins, Zap, Gift, Check, Star, Copy } from "lucide-react"
import { useToastContext } from "@/components/toast-provider"
import { useNotifications } from "@/hooks/use-notifications"

const nairaCoinPackages = [
  {
    id: 1,
    coins: 100,
    price: 1500,
    bonus: 0,
    popular: false,
    description: "Perfect for trying out our service",
  },
  {
    id: 2,
    coins: 500,
    price: 6750,
    bonus: 50,
    popular: true,
    description: "Most popular choice for regular users",
  },
  {
    id: 3,
    coins: 1000,
    price: 12000,
    bonus: 150,
    popular: false,
    description: "Great value for heavy users",
  },
  {
    id: 4,
    coins: 2500,
    price: 30000,
    bonus: 500,
    popular: false,
    description: "Enterprise package with maximum savings",
  },
]

const cryptoCoinPackages = [
  {
    id: 1,
    coins: 100,
    priceUSDT: 10,
    priceETH: 0.004,
    bonus: 0,
    popular: false,
    description: "Perfect for trying out our service",
  },
  {
    id: 2,
    coins: 500,
    priceUSDT: 45,
    priceETH: 0.018,
    bonus: 50,
    popular: true,
    description: "Most popular choice for regular users",
  },
  {
    id: 3,
    coins: 1000,
    priceUSDT: 80,
    priceETH: 0.032,
    bonus: 150,
    popular: false,
    description: "Great value for heavy users",
  },
  {
    id: 4,
    coins: 2500,
    priceUSDT: 200,
    priceETH: 0.08,
    bonus: 500,
    popular: false,
    description: "Enterprise package with maximum savings",
  },
]

export default function RechargePage() {
  const [selectedPackage, setSelectedPackage] = useState(2)
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("naira")
  const [selectedCrypto, setSelectedCrypto] = useState("usdt")
  const [isProcessing, setIsProcessing] = useState(false)

  // Add these hooks at the top of the component:
  const { toast } = useToastContext()
  const { addNotification } = useNotifications()

  // Replace the handlePayment function with:
  const handlePayment = () => {
    setIsProcessing(true)

    setTimeout(() => {
      setIsProcessing(false)
      if (paymentMethod === "naira") {
        // Simulate successful payment
        const pkg = currentPackages.find((p) => p.id === selectedPackage)
        if (pkg) {
          toast({
            title: "Payment Successful!",
            description: `${pkg.coins + pkg.bonus} coins added to your account.`,
            type: "success",
          })

          addNotification({
            title: "Coins Recharged",
            message: `Successfully added ${pkg.coins + pkg.bonus} coins to your account for ₦${pkg.price}.`,
            type: "success",
          })

          // In real app, redirect to Paystack
          window.open(`https://paystack.com/pay/seamz-${pkg.id}`, "_blank")
        }
      } else {
        // Crypto payment
        const pkg = currentPackages.find((p) => p.id === selectedPackage)
        if (pkg) {
          toast({
            title: "Payment Address Copied!",
            description: "Send the exact amount to complete your purchase.",
            type: "info",
          })

          // Copy address to clipboard
          const address =
            selectedCrypto === "usdt"
              ? "TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE"
              : "0x742d35Cc6634C0532925a3b8D404fddBD4f3ABCD"
          navigator.clipboard.writeText(address)

          addNotification({
            title: "Crypto Payment Pending",
            message: `Waiting for ${selectedCrypto === "usdt" ? pkg.priceUSDT + " USDT" : pkg.priceETH + " ETH"} payment confirmation.`,
            type: "info",
          })
        }
      }
    }, 2000)
  }

  const currentPackages = paymentMethod === "naira" ? nairaCoinPackages : cryptoCoinPackages
  const selectedPkg = currentPackages.find((p) => p.id === selectedPackage)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Recharge Coins</h1>
        <p className="text-muted-foreground">Add coins to your account to purchase phone numbers</p>
      </div>

      {/* Current Balance */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Current Balance</p>
              <div className="flex items-center space-x-2">
                <Coins className="h-6 w-6 text-primary" />
                <span className="text-3xl font-bold">1,250</span>
                <span className="text-lg text-muted-foreground">coins</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Equivalent to</p>
              <p className="text-2xl font-bold">₦18,750</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="packages" className="space-y-6">
        <TabsList>
          <TabsTrigger value="packages">Coin Packages</TabsTrigger>
          <TabsTrigger value="custom">Custom Amount</TabsTrigger>
        </TabsList>

        <TabsContent value="packages" className="space-y-6">
          {/* Payment Method Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Choose how you want to pay</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="naira">Nigerian Naira</TabsTrigger>
                  <TabsTrigger value="crypto">Cryptocurrency</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>

          {/* Coin Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPackages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className={`cursor-pointer transition-all hover:shadow-lg card-hover animate-fade-in ${
                  selectedPackage === pkg.id ? "ring-2 ring-primary" : ""
                } ${pkg.popular ? "border-primary" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium rounded-t-lg">
                    <Star className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <Coins className="h-6 w-6 text-primary" />
                    <span>{pkg.coins.toLocaleString()}</span>
                  </CardTitle>
                  {pkg.bonus > 0 && (
                    <Badge variant="secondary" className="mx-auto">
                      <Gift className="h-3 w-3 mr-1" />+{pkg.bonus} bonus
                    </Badge>
                  )}
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  {paymentMethod === "naira" ? (
                    <div className="text-3xl font-bold mb-2">₦{pkg.price}</div>
                  ) : (
                    <div className="space-y-2">
                      <div className="text-2xl font-bold">
                        {selectedCrypto === "usdt" ? `$${pkg.priceUSDT} USDT` : `${pkg.priceETH} ETH`}
                      </div>
                    </div>
                  )}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{pkg.coins} base coins</span>
                    </div>
                    {pkg.bonus > 0 && (
                      <div className="flex items-center justify-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span>{pkg.bonus} bonus coins</span>
                      </div>
                    )}
                    <div className="flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>Instant delivery</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Crypto Selection */}
          {paymentMethod === "crypto" && (
            <Card>
              <CardHeader>
                <CardTitle>Select Cryptocurrency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card
                    className={`cursor-pointer transition-all ${selectedCrypto === "usdt" ? "ring-2 ring-primary" : ""}`}
                    onClick={() => setSelectedCrypto("usdt")}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="h-8 w-8 mx-auto mb-2 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">U</span>
                      </div>
                      <p className="font-medium">USDT</p>
                      <p className="text-sm text-muted-foreground">Tether (TRC20)</p>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer transition-all ${selectedCrypto === "eth" ? "ring-2 ring-primary" : ""}`}
                    onClick={() => setSelectedCrypto("eth")}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="h-8 w-8 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">E</span>
                      </div>
                      <p className="font-medium">Ethereum</p>
                      <p className="text-sm text-muted-foreground">ETH (ERC20)</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="custom" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Custom Amount</CardTitle>
              <CardDescription>Enter any amount you'd like to recharge</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount ({paymentMethod === "naira" ? "NGN" : "USD"})</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder={paymentMethod === "naira" ? "1500" : "10"}
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>You'll receive</Label>
                  <div className="flex items-center space-x-2 p-3 bg-muted rounded-md">
                    <Coins className="h-5 w-5 text-primary" />
                    <span className="font-medium">
                      {customAmount
                        ? paymentMethod === "naira"
                          ? Math.floor(Number.parseFloat(customAmount) / 15).toLocaleString()
                          : (Number.parseFloat(customAmount) * 10).toLocaleString()
                        : "0"}{" "}
                      coins
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Payment Details */}
      {paymentMethod === "crypto" && selectedPkg && (
        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
            <CardDescription>Send the exact amount to the address below</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Payment Address</Label>
              <div className="flex space-x-2">
                <Input
                  value={
                    selectedCrypto === "usdt"
                      ? "TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE"
                      : "0x742d35Cc6634C0532925a3b8D404fddBD4f3ABCD"
                  }
                  readOnly
                  className="font-mono text-sm"
                />
                <Button variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Amount to Send</Label>
              <div className="p-3 bg-muted rounded-md font-mono text-lg font-bold">
                {selectedCrypto === "usdt" ? `${selectedPkg.priceUSDT} USDT` : `${selectedPkg.priceETH} ETH`}
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">
                <Zap className="inline h-4 w-4 mr-1" />
                Send the exact amount to avoid delays. Your coins will be credited within 10 minutes after confirmation.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Purchase Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Purchase Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Package:</span>
              <span className="font-medium">{selectedPkg?.coins.toLocaleString()} coins</span>
            </div>
            {selectedPkg?.bonus > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Bonus coins:</span>
                <span className="font-medium">+{selectedPkg?.bonus.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Payment method:</span>
              <span className="font-medium capitalize">{paymentMethod}</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>
                  {paymentMethod === "naira"
                    ? `₦${selectedPkg?.price}`
                    : selectedCrypto === "usdt"
                      ? `$${selectedPkg?.priceUSDT} USDT`
                      : `${selectedPkg?.priceETH} ETH`}
                </span>
              </div>
            </div>
          </div>

          <Button className="w-full mt-6" size="lg" onClick={handlePayment} disabled={isProcessing}>
            <CreditCard className="mr-2 h-5 w-5" />
            {isProcessing ? "Processing..." : paymentMethod === "naira" ? "Pay with Paystack" : "I've Sent Payment"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
