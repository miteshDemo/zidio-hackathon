import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const auth = useAuth();
  const nav = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setErr(null);
    try {
      await auth.signIn({ email, password });
      nav("/dashboard");
    } catch (e) {
      setErr(e.message);
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-4">
          Welcome Back
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          {err && (
            <div className="text-red-600 text-sm text-center font-medium">
              {err}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Enter email"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-slate-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="Enter password"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-slate-800"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#007BFF] text-white py-2 rounded-lg font-semibold hover:bg-[#006AE0]"
          >
            Login
          </button>

          <div className="text-sm text-center text-slate-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-slate-800 font-medium hover:underline"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
