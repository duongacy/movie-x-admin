import React, { useState } from 'react';
import logo from './logo.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
// slick
// =============

import './assets/main.css';
import { useEffect } from 'react';

const App: React.FC = () => {
    
    const getLocalTheme = () => {
        return localStorage.getItem("theme") || "default";
    }
    useEffect(() => {
        const localTheme = getLocalTheme();
        document.documentElement.className = localTheme;
    }, [])

    const switchTheme = () => {
        const localTheme = getLocalTheme();
        if (localTheme === "light") {
            document.documentElement.className = "dark";
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.className = "light";
            localStorage.setItem("theme", "light");
        }
    }

    return (
        <>
            <div className="bg-white py-0.5">
                <button className="text-white" onClick={() => switchTheme()}>Toggle theme</button>
            </div>
            <div className="bg-primary pt-20">
            </div>

        </>
    );
};

export default App;
