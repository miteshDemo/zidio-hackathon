import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import * as api from "../services/api";
import Card from "../components/Card";

export default function Dashboard() {
  const { user, setUser } = useAuth(); // assuming your hook exposes setUser
  const [data, setData] = useState(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      const r = await api.getDashboard(user?.id);
      setData(r);
    }
    load();
  }, [user]);

  async function handleSave() {
    setLoading(true);
    try {
      const updated = await api.updateUser(user.id, { name, email });
      setUser(updated); // update auth context
      setEditing(false);
    } catch (err) {
      console.error("Failed to update user", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 p-8 space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Dashboard
        </h1>
        {user && (
          <div className="text-right">
            <p className="text-lg font-semibold text-indigo-300">
              👋 Welcome, {user.name}!
            </p>
            <p className="text-sm text-slate-300">{user.email}</p>
          </div>
        )}
      </div>

      {/* Top Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl transition rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800">Your Profile</h3>

          {!editing ? (
            <div className="mt-3">
              <p className="text-sm text-slate-600">
                {user?.name} ({user?.email})
              </p>
              <button
                onClick={() => setEditing(true)}
                className="mt-3 px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="mt-3 space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border px-2 py-1 rounded focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border px-2 py-1 rounded focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="px-3 py-1 border rounded hover:bg-slate-100 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </Card>

        {/* Teams */}
        <Card className="bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl transition rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800">Teams</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {data?.teams?.map((t) => (
              <li
                key={t.id}
                className="border rounded-lg p-3 hover:bg-slate-100 transition"
              >
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-slate-500">
                      {t.members.join(", ")}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-indigo-600">
                    {t.score} pts
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        {/* Submissions */}
        <Card className="bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl transition rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800">Submissions</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {data?.submissions?.map((s) => (
              <li
                key={s.id}
                className="flex justify-between items-center border-b pb-2 hover:text-indigo-600 transition"
              >
                <div>
                  <div className="font-medium">{s.title}</div>
                  <a
                    href={s.link}
                    className="text-xs text-blue-600 hover:underline"
                  >
                    {s.link}
                  </a>
                </div>
                <div className="text-xs text-slate-500">{s.status}</div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl transition rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800">Quick Actions</h3>
          <div className="mt-3 space-y-3">
            <a
              href="/submission"
              className="block px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-transform transform hover:scale-[1.02]"
            >
              ➕ New Submission
            </a>
            <a
              href="/leaderboard"
              className="block px-4 py-2 border rounded-lg font-medium hover:bg-slate-100 transition"
            >
              📊 View Leaderboard
            </a>
          </div>
        </Card>

        <Card className="bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl transition rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800">Resources</h3>
          <p className="text-sm text-slate-600 mt-2">
            📚 Mentor hours, rules, FAQ — add links here.
          </p>
        </Card>
      </div>
    </div>
  );
}
