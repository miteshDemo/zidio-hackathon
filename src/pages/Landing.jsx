import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Landing() {
  const { user } = useAuth()

  return (
    <div className="space-y-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold">Run great hackathons — fast</h1>
          <p className="mt-4 text-slate-600">
            Participant registration, team management, submissions, leaderboards and admin tools — all in one platform.
          </p>

          <div className="mt-6 flex gap-3">

            {/* IF USER IS NOT LOGGED IN — show Get started */}
            {!user && (
              <Link
                to="/register"
                className="px-4 py-2 bg-slate-800 text-white rounded"
              >
                Get started
              </Link>
            )}

            {/* IF USER IS LOGGED IN — show Dashboard */}
            {user && (
              <Link
                to="/dashboard"
                className="px-4 py-2 bg-white border rounded text-slate-800"
              >
                Go to Dashboard
              </Link>
            )}

            {/* Leaderboard visible for everyone */}
            <Link
              to="/leaderboard"
              className="px-4 py-2 border rounded text-slate-800"
            >
              Leaderboard
            </Link>
          </div>
        </div>

        <div>
          <div className="bg-white shadow rounded p-6">
            <h3 className="font-semibold">Upcoming Hackathons</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>AI for FinTech — 24–26 Jan</li>
              <li>HealthTech Sprint — 14–16 Feb</li>
            </ul>
          </div>
        </div>

      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded shadow">
          <h4 className="font-semibold">Participant Dashboard</h4>
          <p className="text-sm text-slate-600 mt-2">Track your teams and submissions.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h4 className="font-semibold">AI Tools</h4>
          <p className="text-sm text-slate-600 mt-2">
            Code reviewer & auto-scoring (future integration)
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h4 className="font-semibold">Recruitment</h4>
          <p className="text-sm text-slate-600 mt-2">
            Bring recruiters to your winners.
          </p>
        </div>
      </section>
    </div>
  )
}
