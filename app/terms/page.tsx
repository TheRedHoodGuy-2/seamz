import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      {/* Header */}
      <div className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            Legal
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Last updated: January 2024</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  By accessing and using Seamz ("the Service"), you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
                <p>
                  These Terms of Service ("Terms") govern your use of our website located at seamz.ng and our phone
                  number rental services operated by Seamz.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Seamz provides phone number rental services that allow users to rent temporary phone numbers for SMS
                  and voice verification purposes. Our service includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Temporary phone number rental from various countries</li>
                  <li>SMS and voice message reception</li>
                  <li>Coin-based payment system</li>
                  <li>Dashboard for managing rented numbers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Accounts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>To use our service, you must create an account. You are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Payment and Refunds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Our service operates on a coin-based system. Payment terms include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Coins are purchased using Nigerian Naira or cryptocurrency</li>
                  <li>Coins do not expire but are non-transferable</li>
                  <li>Refunds are available within 24 hours for non-functional numbers</li>
                  <li>All sales are final after the 24-hour period</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Prohibited Uses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>You may not use our service for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Illegal activities or fraud</li>
                  <li>Spamming or unsolicited communications</li>
                  <li>Circumventing security measures</li>
                  <li>Creating multiple accounts to abuse promotions</li>
                  <li>Any activity that violates local or international laws</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Service Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. We reserve the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or discontinue the service at any time</li>
                  <li>Perform maintenance that may temporarily affect availability</li>
                  <li>Limit access to certain features or countries</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                  Service, to understand our practices.
                </p>
                <Link href="/privacy" className="text-primary hover:underline">
                  View Privacy Policy →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Seamz shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <ul className="space-y-2">
                  <li>Email: legal@seamz.ng</li>
                  <li>Address: Victoria Island, Lagos, Nigeria</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
