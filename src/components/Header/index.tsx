import React from 'react';
import {UserIcon} from '../svg/UserIcon';

interface IHeaderProps {}
export const Header: React.FC<IHeaderProps> = (props) => {
    return (
        <nav className='flex justify-between bg-neutral h-5.5 items-center px-2 pb-0.5'>
            <a href='#' className='text-white font-extrabold text-24'>
                MovieX
            </a>
            <ul className='flex gap-2'>
                <li>
                    <a className='text-white font-bold text-12 hover:text-primary cursor-pointer' href="#">
                        Lịch chiếu
                    </a>{' '}
                </li>
                <li>
                    <a className='text-white font-bold text-12 hover:text-primary cursor-pointer'>
                        Cụm rạp
                    </a>
                </li>
                <li>
                    <a className='text-white font-bold text-12 hover:text-primary cursor-pointer'>
                        Tin tức
                    </a>
                </li>
                <li>
                    <a className='text-white font-bold text-12 hover:text-primary cursor-pointer'>
                        Ứng dụng
                    </a>
                </li>
            </ul>
            <div className='flex gap-2'>
                <form>
                    <input
                        type='text'
                        className='h-3 bg-transparent border-2 rounded-3xl font-bold text-11 border-white focus:outline-none px-2 text-white'
                        placeholder='Search movie'
                    />
                </form>
                <button className='bg-light rounded-full w-3 h-3 flex items-center justify-center'>
                    <UserIcon />
                </button>
            </div>
        </nav>
    );
};
