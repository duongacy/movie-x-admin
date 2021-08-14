import React from 'react';

interface IContentYDTBlockProps{
    className?:string;
    id?:string;
}
const ContentYDTBlock: React.FC<IContentYDTBlockProps> = ({ children, className, ...restParam }) => {
    return <div className={`px-1 tablet:px-2 laptop:px-3 max-w-desktop mx-auto ${className}`} {...restParam}>{children}</div>;
};

export default ContentYDTBlock;
