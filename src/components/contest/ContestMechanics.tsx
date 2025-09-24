import { Heart } from '@phosphor-icons/react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ContestMechanicsProps {
  mechanics: string[]
  fbPostUrl?: string
}

export function ContestMechanics({ mechanics, fbPostUrl }: ContestMechanicsProps) {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          How to Join
        </h2>
        <p className="text-muted-foreground">
          Follow these simple steps to enter the contest
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {mechanics.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  {index + 1}
                </div>
                <p className="text-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          {fbPostUrl && (
            <div className="mt-6 pt-6 border-t border-border">
              <Button asChild className="w-full sm:w-auto mx-auto flex">
                <a 
                  href={fbPostUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Heart size={20} className="text-red-500" />
                  React to Facebook Post
                </a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}