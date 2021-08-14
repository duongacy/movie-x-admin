import React from 'react'

interface IBlockTitleProps{
    className?: string;
}
const BlockTitle:React.FC<IBlockTitleProps> = ({children, className}) => {
    return (
        <h6 className={`text-14 laptop:text-18 font-600 mb-0.5 text-primary-dark ${className}`}>
            {children}
        </h6>
    )
}

export default BlockTitle
