export default function NotFound() {
  return (
    <div className="min-h-screen rounded-2xl bg-gradient-to-br from-black via-purple-900 to-black p-8">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-10 shadow-lg text-center">
        <h2 className="text-6xl text-red-600 font-extrabold tracking-tight animate-bounce">404</h2>
        <p className="mt-4 text-2xl text-red-600 font-semibold">Oops! Page not found</p>
        <p className="mt-2 text-slate-200">
          The page you’re looking for doesn’t exist. 
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold shadow-md hover:bg-indigo-100 transition-all duration-300"
        >
          ⬅ Go back home
        </a>
      </div>
    </div>
  )
}
