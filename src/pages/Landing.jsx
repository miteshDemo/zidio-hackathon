import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Landing() {
  const { user } = useAuth();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Run great hackathons — fast
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-lg">
            Participant registration, team management, submissions, leaderboards
            and admin tools — all in one platform.
          </p>

          <div className="mt-8 flex gap-4">
            {/* IF USER IS NOT LOGGED IN — show Get started */}
            {!user && (
              <Link
                to="/register"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-transform hover:scale-105"
              >
                Get started
              </Link>
            )}

            {/* IF USER IS LOGGED IN — show Dashboard */}
            {user && (
              <Link
                to="/dashboard"
                className="px-6 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 hover:bg-slate-50 shadow-sm transition-transform hover:scale-105"
              >
                Go to Dashboard
              </Link>
            )}

            {/* Leaderboard visible for everyone */}
            <Link
              to="/leaderboard"
              className="px-6 py-3 border border-slate-300 rounded-lg text-slate-800 hover:bg-slate-50 shadow-sm transition-transform hover:scale-105"
            >
              Leaderboard
            </Link>
          </div>
        </div>

        {/* Upcoming Hackathons Card */}
        <div>
          <div className="bg-white shadow-xl rounded-xl p-8 border border-slate-100 hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold text-slate-800">
              Upcoming Hackathons
            </h3>
            <ul className="mt-6 space-y-4 text-slate-600 text-base">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                AI for FinTech — 24–26 Jan
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                HealthTech Sprint — 14–16 Feb
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
