import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Register(){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [err,setErr] = useState(null)
  const auth = useAuth()
  const nav = useNavigate()

  async function onSubmit(e){
    e.preventDefault()
    setErr(null)
    try {
      await auth.signUp({ name, email, password })
      nav('/dashboard')
    } catch (e) { setErr(e.message) }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        {err && <div className="text-red-600">{err}</div>}
        <input placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} required className="w-full border px-3 py-2 rounded" />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} type="email" required className="w-full border px-3 py-2 rounded" />
        <input placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} type="password" required className="w-full border px-3 py-2 rounded" />
        <button className="w-full bg-slate-800 text-white py-2 rounded">Create account</button>
      </form>
    </div>
  )
}
