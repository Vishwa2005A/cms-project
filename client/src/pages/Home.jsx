import React from 'react'
import   { Link} from 'react-router-dom';

export default function Home() {
    const [scale, setScale] = React.useState(0);

    React.useEffect(() => {
        setTimeout(() => setScale(1), 300);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen min-w-screen bg-blue-200">
            <div
                className={`w-full max-w-2xl bg-blue-300 rounded-xl shadow-md px-6 py-12 flex flex-col items-center mx-4 pt-20 pb-20 transition-transform duration-500`}
                style={{ transform: `scale(${scale})` }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                    Student Information Management CMS
                </h1>
                <p className="text-base md:text-lg text-gray-600 mb-8 text-center max-w-xl">
                    Welcome to the Student Information Management CMS. Easily manage student records, track academic progress, and streamline administrative tasks with our user-friendly platform.
                </p>
                <Link
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
                    to='/login'
                    rel="noopener noreferrer"
                >
                    Get started
                </Link>
            </div>
        </div>
    );
}
