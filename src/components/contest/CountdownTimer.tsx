import { useState, useEffect } from 'react'
import { Clock } from '@phosphor-icons/react'

interface CountdownTimerProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)
        
        setTimeLeft({ days, hours, minutes, seconds })
        setIsExpired(false)
      } else {
        setIsExpired(true)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (isExpired) {
    return (
      <div className="bg-accent text-accent-foreground p-4 rounded-lg text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Clock size={20} />
          <span className="font-semibold">Results Available!</span>
        </div>
        <p className="text-sm">The winner announcement is now live!</p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-lg text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Clock size={20} className="animate-pulse" />
        <span className="font-semibold">Winner Announcement In:</span>
      </div>
      <div className="grid grid-cols-4 gap-2 text-center max-w-sm mx-auto">
        <div className="bg-white/20 rounded-lg p-2">
          <div className="text-xl font-bold">{timeLeft.days}</div>
          <div className="text-xs opacity-90">Days</div>
        </div>
        <div className="bg-white/20 rounded-lg p-2">
          <div className="text-xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs opacity-90">Hours</div>
        </div>
        <div className="bg-white/20 rounded-lg p-2">
          <div className="text-xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs opacity-90">Mins</div>
        </div>
        <div className="bg-white/20 rounded-lg p-2">
          <div className="text-xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs opacity-90">Secs</div>
        </div>
      </div>
    </div>
  )
}