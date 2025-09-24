import { useState, useEffect } from 'react'
import { Separator } from '@/components/ui/separator'
import { CountdownTimer } from '@/components/contest/CountdownTimer'
import { HeroSection } from '@/components/contest/HeroSection'
import { ContestMechanics } from '@/components/contest/ContestMechanics'
import { WinnerAnnouncement } from '@/components/contest/WinnerAnnouncement'
import { ContestantsList } from '@/components/contest/ContestantsList'
import { ContestDemo } from '@/components/contest/ContestDemo'
import contestData from '@/data/contest.json'
import contestWithWinnerData from '@/data/contest-with-winner.json'

interface Contestant {
  id: string
  name: string
  profilePicture?: string
  fbProfileUrl?: string
}

interface Winner extends Contestant {
  announcementDate: string
}

interface ContestData {
  contest: {
    title: string
    tagline: string
    description: string
    fbPostUrl?: string
    announcementDate: string
    mechanics: string[]
  }
  winner: Winner | null
  contestants: Contestant[]
}

function App() {
  const [showWinner, setShowWinner] = useState(false)
  const [showMechanics, setShowMechanics] = useState(false)
  
  const data: ContestData = showWinner ? contestWithWinnerData : contestData

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
          <ContestDemo 
            showWinner={showWinner} 
            onToggleWinner={setShowWinner} 
          />
          
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
              <WinnerAnnouncement winner={data.winner} />
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
            winnerId={data.winner?.id}
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