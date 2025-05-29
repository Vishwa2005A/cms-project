import React from 'react'

export default function About() {
  const team = [
    {
      name: "Vishwa A",
      role: "Frontend Developer",
      email: "vishwa6372@gmail.com"
    },
    {
      name: "Mano M",
      role: "Frontend Developer",
      email: "jane@example.com"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-200 px-4 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About the Project</h1>
        <br />
        <p className="text-gray-600 text-lg mb-10">
          This Student Database Management System helps institutions store, manage, and retrieve student data efficiently.
          It provides features like student records, search functionality, and user authentication.
        </p>
        <br />

        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
          {team.map((member, index) => (
            <div key={index} className="bg-blue-300 p-6 rounded-2xl shadow hover:shadow-lg transition">
              
              <h3 className="text-xl font-medium text-gray-800">{member.name}</h3>
              <br />
              <p className="text-blue-600">{member.role}</p>
              <br />
              <p className="text-sm text-gray-500 mt-2">{member.email}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-2">If you have any questions or feedback, feel free to reach out to our team members directly via email.</p>
      </div>
    </div>
  );
};

