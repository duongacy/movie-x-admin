import React, { useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import './assets/main.css';
import ContentYDT from './components/ContentYDT/ContentYDT';
import FooterYDT from './components/FooterYDT/FooterYDT';
import HeaderYDT from './components/HeaderYDT/HeaderYDT';

const App: React.FC = () => {
    return (
        <div className="flex flex-col justify-between" style={{minHeight:"100vh"}}>
            <HeaderYDT/>
            <ContentYDT/>
            <FooterYDT/>
        </div>
    );
};

export default App;
