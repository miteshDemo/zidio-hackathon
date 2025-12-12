import React, { useState } from "react";
import Card from "../components/Card";

export default function Submission() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [msg, setMsg] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    setMsg({ type: "success", text: "✅ Submission saved locally (mock)." });
    setTitle("");
    setLink("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-white tracking-tight">
          🚀 Submit Your Project
        </h2>

        <Card className="bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            {msg && (
              <div
                className={`text-sm text-center font-medium ${
                  msg.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {msg.text}
              </div>
            )}

            {/* Project Title */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Project Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Enter project title"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
              />
            </div>

            {/* GitHub / Demo Link */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                GitHub / Demo Link
              </label>
              <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
                placeholder="https://github.com/yourproject"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
              />
            </div>

            {/* Upload */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Upload (optional)
              </label>
              <input
                type="file"
                className="w-full text-sm file:mr-4 file:py-2 file:px-4 
                           file:rounded-lg file:border-0 
                           file:text-sm file:font-semibold 
                           file:bg-purple-600 file:text-white 
                           hover:file:bg-purple-700 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2.5 rounded-lg font-semibold hover:bg-purple-800 transition-transform transform hover:scale-[1.02]"
            >
              Submit Project
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
}