import React from 'react';

interface IMenuYDTProps {
    className?: string;
}
const MenuYDT: React.FC<IMenuYDTProps> = ({ className = '' }) => {
    return (
        <ul className={`flex gap-1.5 text-12 text-s-text ${className}`}>
            <li>
                <a className="font-500 ">Trang chủ</a>
            </li>
            <li>
                <a className="opacity-60 hover:opacity-80">Lịch chiếu</a>
            </li>
            <li>
                <a className="opacity-60 hover:opacity-80">Cụm rạp</a>
            </li>
            <li>
                <a className="opacity-60 hover:opacity-80">Tin tức</a>
            </li>
            <li>
                <a className="opacity-60 hover:opacity-80">Ứng dụng</a>
            </li>
        </ul>
    );
};
export default MenuYDT;
