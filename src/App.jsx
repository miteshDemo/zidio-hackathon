import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Submission from './pages/Submission'
import Leaderboard from './pages/Leaderboard'
import AdminPanel from './pages/AdminPanel'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'
import PrivateRoute from './components/PrivateRoute'
import { AuthProvider } from './hooks/useAuth'

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute><Dashboard /></PrivateRoute>}
            />
            <Route
              path="/submission"
              element={<PrivateRoute><Submission /></PrivateRoute>}
            />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/portfolio/:userId" element={<Portfolio />} />
            <Route path="/admin" element={<PrivateRoute adminOnly><AdminPanel /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}
