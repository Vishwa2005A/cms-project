import React from 'react'

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-blue-200 rounded-xl shadow-md p-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Student Information Management CMS
            </h1>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
                Welcome to the Student Information Management CMS. Easily manage student records, track academic progress, and streamline administrative tasks with our user-friendly platform.
            </p>
            <button className="px-8 py-3 text-base font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
                Get Started
            </button>
        </div>
    );
}
