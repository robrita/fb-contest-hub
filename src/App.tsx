import { useState } from 'react'
import { Separator } from '@/components/ui/separator'
import { CountdownTimer } from '@/components/contest/CountdownTimer'
import { HeroSection } from '@/components/contest/HeroSection'
import { ContestMechanics } from '@/components/contest/ContestMechanics'
import { WinnerAnnouncement } from '@/components/contest/WinnerAnnouncement'
import { ContestantsList } from '@/components/contest/ContestantsList'
import contestData from '@/data/contest.json'

interface ContestData {
  contest: {
    title: string
    tagline: string
    description: string
    fbPostUrl?: string
    announcementDate: string
    mechanics: string[]
  }
  winner: string | null
  contestants: string[]
}

function App() {
  const [showMechanics, setShowMechanics] = useState(false)
  
  const data: ContestData = contestData

  const scrollToMechanics = () => {
    setShowMechanics(true)
    setTimeout(() => {
      document.getElementById('mechanics')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="space-y-8">
          <CountdownTimer targetDate={data.contest.announcementDate} />
          
          <HeroSection
            title={data.contest.title}
            tagline={data.contest.tagline}
            description={data.contest.description}
            fbPostUrl={data.contest.fbPostUrl}
            onShowMechanics={scrollToMechanics}
          />

          <Separator />

          {data.winner && (
            <>
              <WinnerAnnouncement winner={data.winner} announcementDate={data.contest.announcementDate} />
              <Separator />
            </>
          )}

          {(showMechanics || !data.winner) && (
            <>
              <div id="mechanics">
                <ContestMechanics 
                  mechanics={data.contest.mechanics}
                  fbPostUrl={data.contest.fbPostUrl}
                />
              </div>
              <Separator />
            </>
          )}

          <ContestantsList 
            contestants={data.contestants}
            winnerName={data.winner}
          />
        </div>
      </div>

      <footer className="bg-muted mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Contest is subject to terms and conditions. Winner will be contacted directly via Facebook.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App