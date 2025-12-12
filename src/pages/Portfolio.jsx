import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../services/api'
import Card from '../components/Card'

export default function Portfolio(){
  const { userId } = useParams()
  const [data, setData] = useState(null)
  useEffect(() => {
    async function load(){ const r = await api.getUserPortfolio(userId); setData(r) }
    load()
  }, [userId])

  if (!data) return <div>Loading...</div>

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center text-lg font-semibold">{data.user.name.slice(0,1)}</div>
        <div>
          <h2 className="text-2xl font-semibold">{data.user.name}</h2>
          <div className="text-sm text-slate-600">{data.user.email}</div>
        </div>
      </div>

      <Card>
        <h3 className="font-semibold">Projects</h3>
        <ul className="mt-3 space-y-3">
          {data.projects.map(p => (
            <li key={p.id} className="border rounded p-3">
              <div className="font-medium">{p.title}</div>
              <div className="text-sm text-slate-600">{p.description}</div>
              <a href={p.link} className="text-sm text-slate-800 underline">View</a>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
