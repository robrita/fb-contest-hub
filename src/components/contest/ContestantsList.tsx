import { useState } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { Input } from '@/components/ui/input'

interface ContestantsListProps {
  contestants: string[]
  winnerName?: string | null
}

export function ContestantsList({ contestants, winnerName }: ContestantsListProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredContestants = contestants
    .filter(name => name !== winnerName)
    .filter(name => 
      name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.localeCompare(b))

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
        <div className="text-center">
          <div className="inline-block text-left max-w-2xl">
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {filteredContestants.map((name, index) => (
                <span key={name} className="text-foreground">
                  {name}
                  {index < filteredContestants.length - 1 && (
                    <span className="text-muted-foreground ml-1">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}