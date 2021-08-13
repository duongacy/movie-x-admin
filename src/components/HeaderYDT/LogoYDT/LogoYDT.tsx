import React from 'react';

interface ILogoYDTProps {
    className?: string;
}

const LogoYDT: React.FC<ILogoYDTProps> = ({ className = '' }) => {
    return <a className={`text-16 font-700 opacity-80 hover:opacity-100 ${className}`}>MovieYDT</a>;
};

export default LogoYDT;
