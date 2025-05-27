import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Construction } from "lucide-react"

interface ComingSoonProps {
  feature: string
  description?: string
}

export function ComingSoon({ feature, description }: ComingSoonProps) {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center justify-center p-8 text-center">
        <Construction className="h-12 w-12 text-primary mb-4" />
        <Badge variant="secondary" className="mb-3">
          Coming Soon
        </Badge>
        <h3 className="text-lg font-semibold mb-2">{feature}</h3>
        {description && <p className="text-muted-foreground max-w-sm">{description}</p>}
      </CardContent>
    </Card>
  )
}
