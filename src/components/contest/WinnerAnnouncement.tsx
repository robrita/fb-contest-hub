import { useState, useEffect } from 'react'
import { Trophy } from '@phosphor-icons/react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface WinnerAnnouncementProps {
  winner: string
  announcementDate: string
}

export function WinnerAnnouncement({ winner, announcementDate }: WinnerAnnouncementProps) {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showConfetti && <ConfettiCanvas />}
      <Card className="bg-gradient-to-br from-accent/20 to-accent/10 border-accent/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent" />
        <CardContent className="p-6 text-center relative">
          <div className="flex justify-center mb-4">
            <Badge className="bg-accent text-accent-foreground px-4 py-2 text-lg font-bold">
              <Trophy size={20} className="mr-2" />
              WINNER ANNOUNCED!
            </Badge>
          </div>
          
          <div className="space-y-4">
            <Avatar className="w-24 h-24 mx-auto border-4 border-accent shadow-lg">
              <AvatarFallback className="text-2xl font-bold bg-accent text-accent-foreground">
                {winner.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Congratulations, {winner}! 🎉
              </h2>
              <p className="text-muted-foreground mb-4">
                You are our lucky winner! Check your Facebook messages for details on claiming your prize.
              </p>
              <p className="text-sm text-muted-foreground">
                Winner announced on {new Date(announcementDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

function ConfettiCanvas() {
  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.pointerEvents = 'none'
    canvas.style.zIndex = '9999'
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const confetti: Array<{
      x: number
      y: number
      vx: number
      vy: number
      color: string
      size: number
      rotation: number
      rotationSpeed: number
    }> = []

    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7']

    for (let i = 0; i < 100; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: -10,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      })
    }

    let animationId: number
    
    function animate() {
      if (!ctx) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      confetti.forEach((piece, index) => {
        piece.x += piece.vx
        piece.y += piece.vy
        piece.rotation += piece.rotationSpeed
        
        ctx.save()
        ctx.translate(piece.x, piece.y)
        ctx.rotate((piece.rotation * Math.PI) / 180)
        ctx.fillStyle = piece.color
        ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size)
        ctx.restore()
        
        if (piece.y > canvas.height + 10) {
          confetti.splice(index, 1)
        }
      })
      
      if (confetti.length > 0) {
        animationId = requestAnimationFrame(animate)
      } else {
        document.body.removeChild(canvas)
      }
    }
    
    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas)
      }
    }
  }, [])

  return null
}