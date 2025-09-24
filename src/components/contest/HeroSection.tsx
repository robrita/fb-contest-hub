import { Heart, Share } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  title: string
  tagline: string
  description: string
  fbPostUrl?: string
  onShowMechanics: () => void
}

export function HeroSection({ 
  title, 
  tagline, 
  description, 
  fbPostUrl, 
  onShowMechanics 
}: HeroSectionProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: tagline,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <section className="text-center space-y-6 py-12">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {tagline}
        </p>
        <p className="text-foreground max-w-lg mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {fbPostUrl && (
          <Button asChild size="lg" className="min-w-48">
            <a 
              href={fbPostUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Heart size={20} className="text-red-500" />
              Join Contest Now
            </a>
          </Button>
        )}
        
        <Button 
          variant="outline" 
          size="lg" 
          onClick={onShowMechanics}
          className="min-w-48"
        >
          How to Join
        </Button>
        
        <Button 
          variant="ghost" 
          size="lg"
          onClick={handleShare}
          className="flex items-center gap-2"
        >
          <Share size={20} />
          Share Contest
        </Button>
      </div>

      <div className="pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm">
          <Heart size={16} className="text-red-500" />
          <span>Free to enter • Random winner selection</span>
        </div>
      </div>
    </section>
  )
}