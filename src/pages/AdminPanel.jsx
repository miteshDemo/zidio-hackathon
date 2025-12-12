import React from 'react'
import Card from '../components/Card'

export default function AdminPanel(){
  // UI-only admin landing
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Admin Panel</h1>

      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <h3 className="font-semibold">Create Hackathon</h3>
          <p className="text-sm text-slate-600 mt-2">Form UI placeholder for creating events, deadlines, prizes.</p>
        </Card>

        <Card>
          <h3 className="font-semibold">Manage Participants</h3>
          <p className="text-sm text-slate-600 mt-2">Search, export users, manage roles.</p>
        </Card>

        <Card>
          <h3 className="font-semibold">Judging & Scoring</h3>
          <p className="text-sm text-slate-600 mt-2">View scoring panel and approve finalists.</p>
        </Card>
      </div>

      <Card>
        <h3 className="font-semibold">Reports</h3>
        <p className="text-sm text-slate-600 mt-2">Export CSV/Excel UI.</p>
      </Card>
    </div>
  )
}
