import { ArrowSquareOut } from '@phosphor-icons/react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Contestant {
  id: string
  name: string
  profilePicture?: string
  fbProfileUrl?: string
}

interface ContestantCardProps {
  contestant: Contestant
}

export function ContestantCard({ contestant }: ContestantCardProps) {
  const initials = contestant.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  return (
    <Card className="hover:shadow-md transition-all duration-200 hover:scale-105">
      <CardContent className="p-4 text-center">
        <Avatar className="w-16 h-16 mx-auto mb-3 border-2 border-border">
          <AvatarImage 
            src={contestant.profilePicture} 
            alt={contestant.name}
            className="object-cover"
            loading="lazy"
          />
          <AvatarFallback className="font-semibold text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <h3 className="font-medium text-foreground mb-2 text-sm leading-tight">
          {contestant.name}
        </h3>
        
        {contestant.fbProfileUrl && (
          <Button 
            asChild 
            variant="outline" 
            size="sm"
            className="text-xs h-8 px-3"
          >
            <a 
              href={contestant.fbProfileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <ArrowSquareOut size={12} />
              View Profile
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}