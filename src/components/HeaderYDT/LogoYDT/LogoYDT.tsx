import React from 'react';

interface ILogoYDTProps {}

const LogoYDT: React.FC<ILogoYDTProps> = (props) => {
    return (
        <a
            className="text-20 font-700  opacity-80 hover:opacity-100"
            style={{ lineHeight: '5rem' }}
        >
            MovieYDT
        </a>
    );
};

export default LogoYDT;
