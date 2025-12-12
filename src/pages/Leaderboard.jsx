import React, { useEffect, useState } from "react";
import * as api from "../services/api";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function Leaderboard() {
  const [list, setList] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    async function load() {
      const r = await api.getLeaderboard();
      setList(r);
    }
    load();
  }, []);

  return (
    <div className="min-h-screen rounded-2xl bg-gradient-to-br from-black via-purple-900 to-black p-8">
      <h2 className="text-4xl font-extrabold text-purple-300 mb-8 text-center tracking-wide">
        🏆 Leaderboard
      </h2>

      <div className="space-y-4 max-w-3xl mx-auto">
        {list.map((t, idx) => (
          <Card
            key={t.id}
            className="flex items-center justify-between bg-gradient-to-r from-purple-800 to-black text-white rounded-xl shadow-lg p-4 hover:scale-[1.02] hover:shadow-xl transition-transform"
          >
            <div>
              <div className="font-semibold text-lg">
                {idx + 1}. {t.name}
              </div>
              <div className="text-xs text-purple-300">{t.members.join(", ")}</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-xl font-bold text-purple-400">{t.score}</div>

              {/* BUTTON TO GO TO PORTFOLIO */}
              <button
                onClick={() => nav(`/portfolio/${t.id}`)}
                className="px-3 py-1 rounded bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold transition"
              >
                View Portfolio
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
