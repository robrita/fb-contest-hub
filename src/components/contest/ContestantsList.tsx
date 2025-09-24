import { useState } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { Input } from '@/components/ui/input'
import { ContestantCard } from './ContestantCard'

interface Contestant {
  id: string
  name: string
  profilePicture?: string
  fbProfileUrl?: string
}

interface ContestantsListProps {
  contestants: Contestant[]
  winnerId?: string
}

export function ContestantsList({ contestants, winnerId }: ContestantsListProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredContestants = contestants
    .filter(contestant => contestant.id !== winnerId)
    .filter(contestant => 
      contestant.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Contest Participants
        </h2>
        <p className="text-muted-foreground">
          {filteredContestants.length} participant{filteredContestants.length !== 1 ? 's' : ''} joined the contest
        </p>
      </div>

      {contestants.length > 8 && (
        <div className="relative max-w-md mx-auto">
          <MagnifyingGlass 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <Input
            type="text"
            placeholder="Search participants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      )}

      {filteredContestants.length === 0 ? (
        <div className="text-center py-12">
          {searchQuery ? (
            <div>
              <p className="text-muted-foreground mb-2">
                No participants found matching "{searchQuery}"
              </p>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-primary hover:underline text-sm"
              >
                Clear search
              </button>
            </div>
          ) : (
            <p className="text-muted-foreground">
              Be the first to join the contest! React with ❤️ to our Facebook post.
            </p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredContestants.map((contestant) => (
            <ContestantCard key={contestant.id} contestant={contestant} />
          ))}
        </div>
      )}
    </section>
  )
}