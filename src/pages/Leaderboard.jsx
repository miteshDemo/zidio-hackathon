import React, { useEffect, useState } from 'react'
import * as api from '../services/api'
import Card from '../components/Card'

export default function Leaderboard(){
  const [list, setList] = useState([])

  useEffect(()=> {
    async function load(){ const r = await api.getLeaderboard(); setList(r) }
    load()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
      <div className="space-y-3">
        {list.map((t, idx) => (
          <Card key={t.id} className="flex items-center justify-between">
            <div>
              <div className="font-medium">{idx+1}. {t.name}</div>
              <div className="text-xs text-slate-500">{t.members.join(', ')}</div>
            </div>
            <div className="text-lg font-semibold">{t.score}</div>
          </Card>
        ))}
      </div>
    </div>
  )
}
