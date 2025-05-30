import React, { useState } from 'react';

export default function AddData() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    email: '',
    course: '',
    gender: '',
    phone: '',
    address: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Password strength check
  const isStrongPassword = (pwd) => pwd.length >= 6 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd);
  // Email format check
  const isValidEmail = (email) => /.+@.+\..+/.test(email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(form.email)) {
      setError('Invalid email format.');
      return;
    }
    if (!isStrongPassword(form.password)) {
      setError('Password must be at least 6 characters, include a number and an uppercase letter.');
      return;
    }
    setMessage('Student data added securely!');
    setForm({ name: '', age: '', email: '', course: '', gender: '', phone: '', address: '', password: '' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-violet-800/80 to-violet-500/80 opacity-90">
      {/* Aurora animated background */}
      <div className="absolute inset-0 -z-10 animate-pulse bg-gradient-to-br from-black via-violet-800/80 to-violet-500/80 opacity-90 blur-2xl" />
      <form
        onSubmit={handleSubmit} 
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-violet-300 animate-fadein"
        style={{ animation: 'fadein 1s cubic-bezier(.4,0,.2,1)' }}
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-violet-700 drop-shadow">Add Student Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold text-violet-700">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-violet-400 transition" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-violet-700">Age</label>
            <input type="number" name="age" value={form.age} onChange={handleChange} required min="1" className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-sky-400 transition" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-violet-700">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-violet-400 transition" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-violet-700">Course</label>
            <input type="text" name="course" value={form.course} onChange={handleChange} required className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-sky-400 transition" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-violet-700">Gender</label>
            <select name="gender" value={form.gender} onChange={handleChange} required className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-violet-400 transition">
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold text-violet-700">Phone</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required pattern="[0-9]{10,}" className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-sky-400 transition" />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold text-violet-700">Address</label>
            <input type="text" name="address" value={form.address} onChange={handleChange} required className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-violet-400 transition" />
          </div>
          <div className="md:col-span-2 relative">
            <label className="block mb-1 font-semibold text-violet-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-sky-400 transition pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-2 top-7 text-xs text-violet-600 hover:underline"
              tabIndex={-1}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button type="submit" className="mt-6 w-full bg-gradient-to-r from-violet-700 via-sky-500 to-black text-white py-2 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform">Add Student</button>
        {error && <p className="mt-4 text-red-600 text-center animate-pulse">{error}</p>}
        {message && <p className="mt-4 text-green-600 text-center animate-fadein">{message}</p>}
      </form>
      {/* Custom animation keyframes for fadein */}
      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
        .animate-fadein { animation: fadein 1s cubic-bezier(.4,0,.2,1); }
      `}</style>
    </div>
  );
}
/* To change the background color, update the gradient colors in the background div above.
  For example, to use a blue-to-green gradient: */
/*
<div className="absolute inset-0 -z-10 animate-pulse bg-gradient-to-br from-blue-900 via-green-400/70 to-green-200/80 opacity-90 blur-2xl" />
*/