import { useContext, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const ROLES = [
  { key: 'admin', label: 'Admin' },
  { key: 'teacher', label: 'Teacher' },
  { key: 'student', label: 'Student' },
];

const SUB_PATHS = {
  admin: [

	  { path: '/dashboard/intro', text: 'Intro' },
    { path: '/dashboard/adddata', text: 'AddData' },
    { path: '/dashboard/profile', text: 'Profile' },
  ],
  teacher: [
    { path: '/dashboard/intro', text: 'Intro' },
    { path: '/dashboard/adddata', text: 'AddData' },
    { path: '/dashboard/profile', text: 'Profile' },
  ],
  student: [
    { path: '/dashboard/intro', text: 'Intro' },
    { path: '/dashboard/adddata', text: 'AddData' },
    { path: '/dashboard/profile', text: 'Profile' },
  ],
};

const LOGIN_CREDENTIALS = {
  admin: { username: 'admin', password: 'admin123' },
  teacher: { username: 'teacher', password: 'teacher123' },
  student: { username: 'student', password: 'student123' },
};

export default function DashboardLayouts() {
  const location = useLocation();
  const { logout } = useContext(AuthContext);
  const [openIndex, setOpenIndex] = useState(null);
  const [loggedInRole, setLoggedInRole] = useState(null);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const handleRoleClick = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
    setLoginForm({ username: '', password: '' });
    setLoginError('');
  };

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    setLoginError('');
  };

  const handleLoginSubmit = (roleKey) => (e) => {
    e.preventDefault();
    const creds = LOGIN_CREDENTIALS[roleKey];
    if (
      loginForm.username === creds.username &&
      loginForm.password === creds.password
    ) {
      setLoggedInRole(roleKey);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials!');
    }
  };

  const handleLogout = () => {
    setLoggedInRole(null);
    logout();
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 rounded-full blur-3xl opacity-40 animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-400 via-sky-500 to-indigo-500 rounded-full blur-2xl opacity-30 animate-spin-slow z-0" />

      <aside className="relative z-10 p-8 w-64 sticky top-0 h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center shadow-2xl rounded-r-3xl border-r-4 border-indigo-700">
        <span className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-blue-400 tracking-widest drop-shadow-lg font-mono">
          Dashboard
        </span>
        <nav className="flex flex-col gap-2 w-full">
          {ROLES.map((role, idx) => (
            <div key={role.key} className="mb-2">
              <button
                type="button"
                onClick={() => handleRoleClick(idx)}
                className={`flex items-center w-full px-5 py-3 rounded-xl font-bold transition text-left text-indigo-200 hover:bg-indigo-700 hover:text-white shadow-md tracking-wide font-sans ${
                  openIndex === idx ? 'bg-indigo-800 scale-105' : ''
                }`}
                style={{ letterSpacing: '0.08em', fontFamily: 'Fira Code, monospace' }}
              >
                <span className="text-2xl mr-2">
                  {role.label === 'Admin' ? '👑' : role.label === 'Teacher' ? '📚' : '🎓'}
                </span>
                {role.label}
                <span className="ml-auto text-lg">{openIndex === idx ? '▲' : '▼'}</span>
              </button>

              {openIndex === idx && (
                <div className="ml-3 mt-3">
                  {loggedInRole !== role.key ? (
                    <>
                      <div className="bg-white/10 p-4 rounded-xl text-sm text-indigo-100 mb-2 shadow-md font-mono">
                        <h2 className="text-lg font-bold mb-1 text-pink-300">Karpagam College of Engineering</h2>
                        <p>Empowering students with tech excellence and holistic development.</p>
                      </div>
                      <form
                        onSubmit={handleLoginSubmit(role.key)}
                        className="flex flex-col gap-3 bg-white/10 p-4 rounded-xl shadow-inner border border-indigo-300 animate-fadein"
                      >
                        <input
                          type="text"
                          name="username"
                          placeholder="Username"
                          value={loginForm.username}
                          onChange={handleLoginChange}
                          className="px-3 py-2 rounded-lg border-2 border-indigo-200 focus:border-pink-400 bg-white/80 text-gray-800 font-mono text-base outline-none transition"
                          autoComplete="username"
                          required
                        />
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={loginForm.password}
                          onChange={handleLoginChange}
                          className="px-3 py-2 rounded-lg border-2 border-indigo-200 focus:border-pink-400 bg-white/80 text-gray-800 font-mono text-base outline-none transition"
                          autoComplete="current-password"
                          required
                        />
                        {loginError && (
                          <div className="text-pink-500 text-xs font-semibold animate-pulse">
                            {loginError}
                          </div>
                        )}
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 text-white rounded-lg px-4 py-2 mt-1 font-bold shadow hover:scale-105 transition-transform tracking-wider font-mono"
                        >
                          Login
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="flex flex-col gap-1 animate-fadein">
                      {SUB_PATHS[role.key].map((child, cidx) => (
                        <Link
                          key={cidx}
                          to={child.path}
                          className={`block px-4 py-2 rounded-lg font-semibold transition font-mono tracking-wide text-lg ${
                            location.pathname === child.path
                              ? 'bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 shadow text-white scale-105'
                              : 'hover:bg-indigo-700 hover:text-white text-indigo-200'
                          }`}
                        >
                          {child.text}
                        </Link>
                      ))}
                      <button
                        onClick={handleLogout}
                        className="w-full mt-3 py-2 bg-gradient-to-r from-pink-600 via-indigo-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 text-white rounded-xl font-bold shadow transition font-mono"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1 min-h-screen overflow-auto p-10 relative z-10">
        <Outlet />
      </main>

      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
        .animate-fadein { animation: fadein 0.7s cubic-bezier(.4,0,.2,1); }
        .animate-spin-slow { animation: spin 12s linear infinite; }
      `}</style>
    </div>
  );
}
