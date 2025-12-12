import React, { useState, useMemo } from "react";
import Card from "../components/Card";

export default function AdminPanel() {
  const [hackForm, setHackForm] = useState({
    title: "",
    deadline: "",
    prize: "",
    description: "",
  });
  const [hackathons, setHackathons] = useState([]);
  const [participants, setParticipants] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "participant" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "mentor" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "judge" },
  ]);
  const [search, setSearch] = useState("");

  const filteredParticipants = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return participants;
    return participants.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.email.toLowerCase().includes(q) ||
        p.role.toLowerCase().includes(q)
    );
  }, [participants, search]);

  function handleHackChange(e) {
    setHackForm({ ...hackForm, [e.target.name]: e.target.value });
  }
  function handleCreateHackathon(e) {
    e.preventDefault();
    setHackathons([{ id: Date.now(), ...hackForm }, ...hackathons]);
    setHackForm({ title: "", deadline: "", prize: "", description: "" });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-300 tracking-wide">
          ⚙️ Admin Panel
        </h1>
        <p className="text-sm text-purple-200 mt-2">
          Manage events, participants, and judging
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Create Hackathon */}
        <Card className="bg-white/90 rounded-xl p-6 shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4">
            🎉 Create Hackathon
          </h3>
          <form onSubmit={handleCreateHackathon} className="space-y-4">
            <input
              name="title"
              value={hackForm.title}
              onChange={handleHackChange}
              placeholder="Hackathon title"
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-600"
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="date"
                name="deadline"
                value={hackForm.deadline}
                onChange={handleHackChange}
                className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-600"
                required
              />
              <input
                name="prize"
                value={hackForm.prize}
                onChange={handleHackChange}
                placeholder="Prize"
                className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <textarea
              name="description"
              value={hackForm.description}
              onChange={handleHackChange}
              placeholder="Description"
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-600"
              rows="3"
            />
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              🚀 Create Hackathon
            </button>
          </form>
        </Card>

        {/* Manage Participants */}
        <Card className="bg-white/90 rounded-xl p-6 shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4">
            👥 Manage Participants
          </h3>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search participants..."
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-600 mb-4"
          />
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-purple-100 text-slate-800">
                  <th className="px-2 sm:px-4 py-2">Name</th>
                  <th className="px-2 sm:px-4 py-2">Email</th>
                  <th className="px-2 sm:px-4 py-2">Role</th>
                  <th className="px-2 sm:px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredParticipants.map((u) => (
                  <tr key={u.id} className="border-b hover:bg-purple-50">
                    <td className="px-2 sm:px-4 py-2">{u.name}</td>
                    <td className="px-2 sm:px-4 py-2 truncate max-w-[120px] sm:max-w-none">
                      {u.email}
                    </td>
                    <td className="px-2 sm:px-4 py-2">{u.role}</td>
                    <td className="px-2 sm:px-4 py-2 space-x-1 sm:space-x-2">
                      <button className="px-2 sm:px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                        Edit
                      </button>
                      <button className="px-2 sm:px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Judging & Scoring */}
        <Card className="bg-white/90 rounded-xl p-6 shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4">
            🏅 Judging & Scoring
          </h3>
          <ul className="space-y-3">
            {/* Example submission */}
            <li className="border rounded-lg p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-semibold">AI Health Assistant</div>
                <div className="text-xs text-slate-500">Team Aether • ID: S-101</div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="w-20 border px-2 py-1 rounded focus:ring-2 focus:ring-purple-600"
                  defaultValue={87}
                />
                <span className="text-xs px-2 py-1 rounded bg-slate-200 text-slate-700">
                  pending
                </span>
                <button className="px-3 py-1 bg-purple-700 text-white rounded hover:bg-purple-800">
                  Approve finalist
                </button>
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
