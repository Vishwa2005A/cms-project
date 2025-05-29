import React from 'react'
import { Link, Outlet } from "react-router";

function BasicLayout() {
    return (
        <>
            <header className="bg-blue-100 text-black py-4 shadow-md flex flex-col sm:flex-row items-center justify-between px-6">
                <div className="text-2xl font-semibold flex items-center gap-2">
                    <div  className="bg-blue-500 border-2 text-white px-4 py-2 text-lg rounded-lg cursor-pointer hover:bg-blue-400 transition-colors"role="img" aria-label="home">
                        <Link to={'/home'}>🏠Home</Link>
                    </div>
                </div>
                <div className="mt-3 sm:mt-0 flex gap-3">
                    <div className="bg-blue-500 border-2 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-400 transition-colors">
                        <Link to={'/login'}>sign-in</Link>
                    </div>
                    <div className="bg-blue-500 text-white border-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-400 transition-colors">
                        <Link to={'/sign-up'}>sign-up</Link>
                    </div>
                    <div className="bg-blue-500 text-white border-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-400 transition-colors">
                        <Link to={'/about'}>About</Link>
                    </div>
                </div>

            </header>
            <main className="">
                <Outlet />
            </main>
            <footer className="bg-blue-200 text-black py-4 text-center mt-0 border-t">
                © {new Date().getFullYear()} Information Management App. All rights reserved.
            </footer>
        </>
    );
}

export default BasicLayout;