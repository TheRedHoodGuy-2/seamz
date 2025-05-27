import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Globe, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      {/* Header */}
      <div className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            Our Story
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Seamz</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by Jenny Nikki, a Nigerian-born New York citizen, Seamz
            bridges the gap between global connectivity and local accessibility
            for Nigerian businesses and developers.
          </p>
        </div>
      </div>

      {/* Founder Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Our Founder</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Jenny Nikki is a visionary entrepreneur who was born in Lagos,
                  Nigeria, and later moved to New York where she honed her
                  skills in technology and business development. Having
                  experienced firsthand the challenges of accessing reliable
                  digital services in Nigeria, she was inspired to create
                  solutions that would bridge this gap.
                </p>
                <p>
                  With over a decade of experience in fintech and
                  telecommunications, Jenny identified the need for a reliable,
                  affordable phone number rental service that could serve
                  Nigerian businesses and developers who needed global
                  connectivity for their applications and services.
                </p>
                <p>
                  "I wanted to create something that would empower Nigerian
                  entrepreneurs and developers to compete globally while staying
                  rooted in their home market," says Jenny. "Seamz is that
                  bridge."
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="relative p-6 overflow-hidden w-64 h-64 bg-gradient-to-br from-primary/45 to-primary/15 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="rounded-full relative overflow-hidden h-16 w-16 scale-[3.7]">
                  <Image
                    src="/images/jenny.png"
                    alt="jenny"
                    width={500}
                    height={200}
                  ></Image>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Jenny Nikki</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
              <p className="text-sm text-muted-foreground mt-2">
                Nigerian-born New York Citizen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering Nigerian businesses with global connectivity solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide Nigerian businesses and developers with reliable,
                  affordable access to global phone number rental services,
                  enabling them to build and scale applications that compete on
                  the world stage while serving their local communities.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become Africa's leading provider of telecommunications
                  solutions, fostering innovation and digital transformation
                  across the continent while maintaining our commitment to
                  accessibility and affordability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliability</h3>
              <p className="text-muted-foreground">
                We ensure 99.9% uptime and consistent service quality so our
                customers can depend on us for their critical business
                operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe technology should be accessible to everyone. Our
                Naira pricing and local support make global services available
                to all Nigerians.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously evolve our platform to meet the changing needs
                of our customers and stay ahead of technological advancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerian businesses and developers who trust Seamz
            for their global connectivity needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="inline-block">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Start Using Seamz
              </button>
            </Link>
            <Link href="/contact" className="inline-block">
              <button className="border border-border px-8 py-3 rounded-md font-medium hover:bg-muted transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
