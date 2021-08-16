import React from 'react';
import Trailer from './Trailer';
import FilmBlock from './FilmBlock';
import CinemaBlock from './CinemaBlock';
import NewsBlock from './MagazineBlock/MagazineBlock';
import AppBlock from './AppBlock';

const HomePage = () => {
    return (
        <HomePageWrapper>
            <Trailer />
            <FilmBlock/>
            <CinemaBlock/>
            <NewsBlock/>
            <AppBlock/>
        </HomePageWrapper>
    );
};
export default HomePage;

interface IHomePageWrapperProps {}
const HomePageWrapper: React.FC<IHomePageWrapperProps> = ({ children }) => {
    return <div className="bg-neutral flex-auto overflow-hidden">{children}</div>;
};
