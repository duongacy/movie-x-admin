import React from 'react';

interface ILogoYDTProps {
    className?: string;
}

const LogoYDT: React.FC<ILogoYDTProps> = ({ className = '' }) => {
    return <h6 className={`text-17 font-700 opacity-80 hover:opacity-100 ${className}`}><a className="block h-full">MovieYDT</a> </h6>;
};

export default LogoYDT;
