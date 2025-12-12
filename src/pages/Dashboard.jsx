import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import * as api from '../services/api'
import Card from '../components/Card'

export default function Dashboard(){
  const { user } = useAuth()
  const [data, setData] = useState(null)

  useEffect(()=>{
    async function load(){ const r = await api.getDashboard(user?.id); setData(r) }
    load()
  }, [user])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <h3 className="font-semibold">Your Profile</h3>
          <p className="text-sm text-slate-600 mt-2">{user?.name} ({user?.email})</p>
        </Card>

        <Card>
          <h3 className="font-semibold">Teams</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {data?.teams?.map(t => (
              <li key={t.id} className="border rounded p-2">
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs">{t.members.join(', ')}</div>
                  </div>
                  <div className="text-sm font-semibold">{t.score} pts</div>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="font-semibold">Submissions</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {data?.submissions?.map(s => (
              <li key={s.id} className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{s.title}</div>
                  <div className="text-xs">{s.link}</div>
                </div>
                <div className="text-xs text-slate-500">{s.status}</div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-semibold">Quick Actions</h3>
          <div className="mt-3 space-y-2">
            <a href="/submission" className="block px-3 py-2 bg-slate-800 text-white rounded">New Submission</a>
            <a href="/leaderboard" className="block px-3 py-2 border rounded">View Leaderboard</a>
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold">Resources</h3>
          <p className="text-sm text-slate-600 mt-2">Mentor hours, rules, FAQ — add links here.</p>
        </Card>
      </div>
    </div>
  )
}
