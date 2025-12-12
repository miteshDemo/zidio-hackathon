import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Logo from "../assets/Zh-removebg-preview.png";

export default function Navbar() {
  const auth = useAuth();
  const nav = useNavigate();

  function onLogout() {

    // OPTION B — Recommended: Show a confirm dialog
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;

    auth.signOut();
    nav("/");
    alert("You have been successfully logged out.");
  }

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={Logo}
              alt="Zidio Hackathon Logo"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-base font-semibold tracking-wide hidden sm:block">
              Zidio Hackathon
            </span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Leaderboard – visible to all */}
          <Link
            to="/leaderboard"
            className="text-sm px-3 py-1.5 border border-white rounded hover:bg-white hover:text-black transition"
          >
            Leaderboard
          </Link>

          {/* Not logged in */}
          {!auth.user && (
            <>
              <Link
                to="/login"
                className="px-3 py-1.5 rounded border border-white text-xs hover:bg-white hover:text-black transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-3 py-1.5 rounded bg-white text-black text-xs hover:bg-gray-200 transition"
              >
                Register
              </Link>
            </>
          )}

          {/* Logged in */}
          {auth.user && (
            <>
              <Link
                to="/dashboard"
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-semibold hover:bg-gray-300 transition"
              >
                {auth.user.name?.charAt(0).toUpperCase()}
              </Link>

              {auth.user.role === "admin" && (
                <Link to="/admin" className="text-xs hover:underline">
                  Admin
                </Link>
              )}

              <button
                onClick={onLogout}
                className="px-3 py-1.5 rounded bg-red-600 text-white text-xs hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
