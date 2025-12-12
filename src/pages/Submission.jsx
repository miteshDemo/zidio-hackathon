import React, { useState } from 'react'
import Card from '../components/Card'

export default function Submission(){
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [msg, setMsg] = useState(null)

  function onSubmit(e){
    e.preventDefault()
    setMsg({type:'success', text: 'Submission saved locally (mock).'})
    setTitle(''); setLink('')
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Submit Project</h2>
      <Card>
        <form onSubmit={onSubmit} className="space-y-4">
          {msg && <div className={`text-sm ${msg.type==='success' ? 'text-green-600' : 'text-red-600'}`}>{msg.text}</div>}
          <div>
            <label className="block text-sm">Project Title</label>
            <input value={title} onChange={e=>setTitle(e.target.value)} required className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">GitHub / Demo Link</label>
            <input value={link} onChange={e=>setLink(e.target.value)} required className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Upload (optional)</label>
            <input type="file" className="w-full" />
          </div>
          <button className="px-4 py-2 bg-slate-800 text-white rounded">Submit</button>
        </form>
      </Card>
    </div>
  )
}
