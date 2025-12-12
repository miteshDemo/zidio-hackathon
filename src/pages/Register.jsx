import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const auth = useAuth();
  const nav = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setErr(null);
    try {
      await auth.signUp({ name, email, password });
      nav("/dashboard");
    } catch (e) {
      setErr(e.message);
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-4">
          Create an Account
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          {err && (
            <div className="text-red-600 text-sm text-center font-medium">
              {err}
            </div>
          )}

          <div>
            <label className="block text-sm mb-1 font-medium text-slate-700">
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-slate-800"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 font-medium text-slate-700">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-slate-800"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 font-medium text-slate-700">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="Create a password"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-slate-800"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#007BFF] text-white py-2 rounded-lg font-semibold hover:bg-[#006AE0] transition-transform transform hover:scale-[1.02]"
          >
            Create Account
          </button>

          <p className="text-sm text-center text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-slate-800 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
