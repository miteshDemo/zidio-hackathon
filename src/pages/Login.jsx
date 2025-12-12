import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState(null)
  const auth = useAuth()
  const nav = useNavigate()

  async function onSubmit(e){
    e.preventDefault()
    setErr(null)
    try {
      await auth.signIn({ email, password })
      nav('/dashboard')
    } catch (e) { setErr(e.message) }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        {err && <div className="text-red-600">{err}</div>}
        <div>
          <label className="block text-sm">Email</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} required className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required className="w-full border px-3 py-2 rounded" />
        </div>
        <button className="w-full bg-slate-800 text-white py-2 rounded">Login</button>
        <div className="text-sm text-slate-600">Don’t have an account? <Link to="/register" className="text-slate-800 underline">Register</Link></div>
      </form>
    </div>
  )
}
