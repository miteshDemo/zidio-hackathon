import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Navbar() {
  const auth = useAuth()
  const nav = useNavigate()

  function onLogout() {
    auth.signOut()
    nav('/')
  }

  return (
    <nav className="bg-black text-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Link to="/" className="font-semibold text-xl">
            Zidio Hackathon
          </Link>
          <Link to="/leaderboard" className="text-sm hover:underline">
            Leaderboard
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* If NOT logged in */}
          {!auth.user && (
            <>
              <Link
                to="/login"
                className="px-3 py-1 rounded border border-white text-sm hover:bg-white hover:text-black transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-3 py-1 rounded bg-white text-black text-sm hover:bg-gray-200 transition"
              >
                Register
              </Link>
            </>
          )}

          {/* If logged in */}
          {auth.user && (
            <>
              {/* Profile Avatar */}
              <Link
                to="/dashboard"
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-semibold hover:bg-gray-300 transition"
              >
                {auth.user.name?.charAt(0).toUpperCase()}
              </Link>

              {/* Admin link (only for admin role) */}
              {auth.user.role === 'admin' && (
                <Link
                  to="/admin"
                  className="text-sm hover:underline"
                >
                  Admin
                </Link>
              )}

              {/* Logout Button */}
              <button
                onClick={onLogout}
                className="px-3 py-1 rounded bg-red-600 text-white text-sm hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  )
}
