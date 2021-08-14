import React from 'react';

interface IMenuYDTProps {
    className?: string;
}
const MenuYDT: React.FC<IMenuYDTProps> = ({ className = '' }) => {
    return (
        <ul className={`flex gap-1.5 text-11 ${className}`}>
            <li>
                <a className="font-500 text-light">Trang chủ</a>
            </li>
            <li>
                <a className="opacity-60 hover:opacity-80 text-light">Lịch chiếu</a>
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
