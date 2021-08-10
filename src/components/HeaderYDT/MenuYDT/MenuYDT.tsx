import React from 'react';

interface IMenuYDTProps {}
const MenuYDT: React.FC<IMenuYDTProps> = (props) => {
    return (
        <ul className="inline-flex gap-1.5 text-12 text-s-text">
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
