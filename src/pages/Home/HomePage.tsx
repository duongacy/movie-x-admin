import React from 'react';
import Trailer from './Trailer';
import FilmBlock from './FilmBlock';
import CinemaBlock from './CinemaBlock';
import NewsBlock from './MagazineBlock/MagazineBlock';
import AppBlock from './AppBlock';
import { useSelector } from 'react-redux';

const HomePage = () => {
    return (
        <HomePageWrapper>
            <Trailer />
            <FilmBlock />
            <CinemaBlock />
            <NewsBlock />
            <AppBlock />
        </HomePageWrapper>
    );
};
export default HomePage;

interface IHomePageWrapperProps {}
const HomePageWrapper: React.FC<IHomePageWrapperProps> = ({ children }) => {
    return (
        <div className=" bg-gradient-to-b from-neutral-dark to-neutral flex-auto overflow-hidden">
            {children}
        </div>
    );
};
