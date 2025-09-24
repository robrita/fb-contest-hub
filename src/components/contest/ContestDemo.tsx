import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'

interface ContestDemoProps {
  onToggleWinner: (showWinner: boolean) => void
  showWinner: boolean
}

export function ContestDemo({ onToggleWinner, showWinner }: ContestDemoProps) {
  return (
    <Card className="bg-muted/50 border-dashed">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="demo-mode" className="text-sm font-medium">
              Demo Mode
            </Label>
            <p className="text-xs text-muted-foreground">
              Toggle to see winner announcement with confetti
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="demo-mode" className="text-sm">
              {showWinner ? 'Winner Announced' : 'Contest Active'}
            </Label>
            <Switch
              id="demo-mode"
              checked={showWinner}
              onCheckedChange={onToggleWinner}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}