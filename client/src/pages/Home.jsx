import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const [animate, setAnimate] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => setAnimate(true), 300);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen min-w-screen bg-gradient-to-br from-black via-sky-400 to-violet-700 transition-colors duration-1000">
            <div
                className={`w-full max-w-2xl bg-violet-700/90 rounded-xl shadow-2xl px-6 py-12 flex flex-col items-center mx-4 pt-20 pb-20 transition-all duration-700 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-sky-200 mb-4 text-center drop-shadow-lg">
                    Student Information Management CMS
                </h1>
                <p className="text-base md:text-lg text-sky-100 mb-8 text-center max-w-xl">
                    Welcome to the Student Information Management CMS. Easily manage student records, track academic progress, and streamline administrative tasks with our user-friendly platform.
                </p>
                <Link
                    className="inline-flex items-center px-6 py-3 bg-black text-sky-300 font-semibold rounded hover:bg-violet-800 hover:text-white transition shadow-lg"
                    to='/login'
                    rel="noopener noreferrer"
                >
                    Get started
                </Link>
            </div>
        </div>
    );
}
