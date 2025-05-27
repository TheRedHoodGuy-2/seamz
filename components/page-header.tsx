"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DarkModeToggle } from "./dark-mode-toggle"

interface PageHeaderProps {
  showBackButton?: boolean
  backHref?: string
  showLogo?: boolean
  showDarkModeToggle?: boolean
}

export function PageHeader({
  showBackButton = true,
  backHref = "/",
  showLogo = true,
  showDarkModeToggle = true,
}: PageHeaderProps) {
  return (
    <header className="sticky top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <Link href={backHref}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
            )}
            {showLogo && (
              <Link href="/" className="text-2xl font-bold">
                <span className="brand-seam">Seam</span>
                <span className="brand-z">z</span>
              </Link>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {showDarkModeToggle && <DarkModeToggle />}
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
