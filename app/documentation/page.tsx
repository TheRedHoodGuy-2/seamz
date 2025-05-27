import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Smartphone } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      {/* Header */}
      <div className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            Documentation
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">How to Use Seamz</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete guide to getting started with Seamz number rental service. From account setup to API integration.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="getting-started" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="buying-numbers">Buying Numbers</TabsTrigger>
              <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="mr-2 h-5 w-5" />
                        Getting Started with Seamz
                      </CardTitle>
                      <CardDescription>
                        Follow these simple steps to start using Seamz for your number rental needs.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                            1
                          </div>
                          <div>
                            <h3 className="font-semibold">Create Your Account</h3>
                            <p className="text-muted-foreground">
                              Sign up with your email and verify your account. It takes less than 2 minutes.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                            2
                          </div>
                          <div>
                            <h3 className="font-semibold">Add Coins to Your Account</h3>
                            <p className="text-muted-foreground">
                              Purchase coins using Naira. Start with ₦1,500 for 100 coins to try out the service.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                            3
                          </div>
                          <div>
                            <h3 className="font-semibold">Choose Your Number</h3>
                            <p className="text-muted-foreground">
                              Browse available numbers from 50+ countries and select the one that fits your needs.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                            4
                          </div>
                          <div>
                            <h3 className="font-semibold">Start Using Your Number</h3>
                            <p className="text-muted-foreground">
                              Your number is activated instantly. Use it for SMS verification, testing, or any other
                              purpose.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Account Types</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h3 className="font-semibold">Personal Account</h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Perfect for individuals and small projects</li>
                            <li>• Manual number management</li>
                            <li>• Standard support</li>
                            <li>• Web dashboard access</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-semibold">Business Account</h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Built for businesses and developers</li>
                            <li>• Priority support</li>
                            <li>• Webhook integrations</li>
                            <li>• Volume discounts</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Quick Links</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Smartphone className="mr-2 h-4 w-4" />
                        Supported Countries
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Need Help?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Can't find what you're looking for? Our support team is here to help.
                      </p>
                      <Button className="w-full">Contact Support</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="buying-numbers" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>How to Buy Phone Numbers</CardTitle>
                  <CardDescription>Step-by-step guide to purchasing and managing your phone numbers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-3">Number Types</h3>
                        <div className="space-y-3">
                          <div className="p-3 border rounded-lg">
                            <h4 className="font-medium">SMS Only</h4>
                            <p className="text-sm text-muted-foreground">
                              Receive SMS messages only. Perfect for verification codes.
                            </p>
                            <p className="text-sm font-medium">Starting from 300 coins</p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <h4 className="font-medium">Voice + SMS</h4>
                            <p className="text-sm text-muted-foreground">
                              Receive both SMS and voice calls. Full functionality.
                            </p>
                            <p className="text-sm font-medium">Starting from 500 coins</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Popular Countries</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>🇺🇸 United States</span>
                            <span>750 coins/month</span>
                          </div>
                          <div className="flex justify-between">
                            <span>🇬🇧 United Kingdom</span>
                            <span>675 coins/month</span>
                          </div>
                          <div className="flex justify-between">
                            <span>🇨🇦 Canada</span>
                            <span>600 coins/month</span>
                          </div>
                          <div className="flex justify-between">
                            <span>🇮🇳 India</span>
                            <span>375 coins/month</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-3">Buying Process</h3>
                        <ol className="space-y-3 text-sm">
                          <li className="flex items-start space-x-2">
                            <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold">
                              1
                            </span>
                            <span>Navigate to "Buy Numbers" in your dashboard</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold">
                              2
                            </span>
                            <span>Filter by country, type, or availability</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold">
                              3
                            </span>
                            <span>Click "Buy Now" on your preferred number</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold">
                              4
                            </span>
                            <span>Confirm purchase and coins will be deducted</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold">
                              5
                            </span>
                            <span>Number is instantly activated and ready to use</span>
                          </li>
                        </ol>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">💡 Pro Tip</h4>
                        <p className="text-sm text-blue-800">
                          Enable auto-renewal to avoid losing important numbers. You can set this up in your account
                          settings.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="troubleshooting" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Common Issues & Solutions</CardTitle>
                  <CardDescription>Quick fixes for the most common problems users encounter</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-6">
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h3 className="font-semibold">Number not receiving SMS</h3>
                      <p className="text-muted-foreground mb-2">If your number isn't receiving SMS messages:</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Check if the number is still active in your dashboard</li>
                        <li>Verify the sender supports the destination country</li>
                        <li>Wait up to 5 minutes as some SMS can be delayed</li>
                        <li>Try requesting a new verification code</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="font-semibold">Insufficient coins error</h3>
                      <p className="text-muted-foreground mb-2">When you see this error:</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Check your current coin balance in the dashboard</li>
                        <li>Purchase more coins from the "Recharge" section</li>
                        <li>Consider enabling auto-recharge to avoid future issues</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="font-semibold">Number expired unexpectedly</h3>
                      <p className="text-muted-foreground mb-2">If your number expired sooner than expected:</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Check your transaction history for automatic renewals</li>
                        <li>Verify auto-renewal settings are enabled</li>
                        <li>Ensure sufficient coins were available for renewal</li>
                        <li>Contact support if the issue persists</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Still Need Help?</h3>
                    <p className="text-muted-foreground mb-4">
                      If you can't find a solution to your problem, our support team is ready to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button>Contact Support</Button>
                      <Button variant="outline">Join Community</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
