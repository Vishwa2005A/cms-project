import React from 'react';

export default function Intro() {
  return (
    <div className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-200 rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto mt-10 animate-fadein">
      {/* Decorative shapes */}
      <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-tr from-yellow-400 via-yellow-200 to-white rounded-full blur-2xl opacity-60 z-0" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200 via-yellow-400 to-white rounded-full blur-2xl opacity-40 z-0" />
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-yellow-500 mb-4 text-center tracking-widest font-mono drop-shadow-lg">
          Meet the Developers
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
          <div className="flex flex-col items-center bg-white/80 rounded-2xl p-6 shadow-lg border-2 border-yellow-200 hover:scale-105 transition-transform">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-200 flex items-center justify-center text-3xl mb-2 shadow">
              <span role="img" aria-label="Mano">👨‍💻</span>
            </div>
            <h2 className="text-xl font-bold text-yellow-600 font-mono">Mano</h2>
            <p className="text-yellow-800 font-semibold mt-1">Frontend Developer</p>
            <p className="text-gray-600 text-sm mt-2 text-center">Passionate about building beautiful, responsive UIs with React and modern web tech.</p>
          </div>
          <div className="flex flex-col items-center bg-white/80 rounded-2xl p-6 shadow-lg border-2 border-yellow-200 hover:scale-105 transition-transform">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-200 flex items-center justify-center text-3xl mb-2 shadow">
              <span role="img" aria-label="Vishwa">👨‍💻</span>
            </div>
            <h2 className="text-xl font-bold text-yellow-600 font-mono">Vishwa</h2>
            <p className="text-yellow-800 font-semibold mt-1">Frontend Developer</p>
            <p className="text-gray-600 text-sm mt-2 text-center">Expert in crafting interactive, user-friendly web apps with React and creative design.</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
        .animate-fadein { animation: fadein 1s cubic-bezier(.4,0,.2,1); }
      `}</style>
    </div>
  );
}
