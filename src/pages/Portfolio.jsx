import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../services/api";
import Card from "../components/Card";

export default function Portfolio() {
  const { userId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      const r = await api.getUserPortfolio(userId);
      setData(r);
    }
    load();
  }, [userId]);

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 text-white text-lg font-semibold animate-pulse">
        Loading Portfolio...
      </div>
    );

  return (
    <div className="min-h-screen rounded-2xl bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* User Header */}
        <div className="flex items-center gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-md ring-4 ring-white/20">
            {data.user.name.slice(0, 1)}
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">
              {data.user.name}
            </h2>
            <div className="text-sm text-purple-200">{data.user.email}</div>
            {data.user.role && (
              <div className="mt-2 inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold text-purple-100 border border-white/30">
                {data.user.role}
              </div>
            )}
          </div>
        </div>

        {/* Projects Section */}
        <Card className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 border-b pb-3 flex items-center gap-2">
            💻 Projects
          </h3>
          <ul className="mt-6 space-y-6">
            {data.projects && data.projects.length > 0 ? (
              data.projects.map((p) => (
                <li
                  key={p.id}
                  className="border rounded-xl p-5 hover:shadow-lg hover:bg-purple-50 transition transform hover:-translate-y-1"
                >
                  <div className="font-semibold text-lg text-slate-800">
                    {p.title}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    {p.description}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-medium text-purple-700 hover:text-purple-900 hover:underline transition"
                  >
                    🔗 View Project
                  </a>
                </li>
              ))
            ) : (
              <p className="text-slate-500 text-sm">No projects yet.</p>
            )}
          </ul>
        </Card>
      </div>
    </div>
  );
}
