import React from 'react';
import Trailer from './Trailer';
import FilmBlock from './FilmBlock';
import CinemaBlock from './CinemaBlock';
import NewsBlock from './NewsBlock';

const HomePage = () => {
    return (
        <HomePageWrapper>
            <Trailer />
            <FilmBlock/>
            <CinemaBlock/>
            <NewsBlock/>
        </HomePageWrapper>
    );
};
export default HomePage;

interface IHomePageWrapperProps {}
const HomePageWrapper: React.FC<IHomePageWrapperProps> = ({ children }) => {
    return <div className="bg-neutral flex-auto overflow-hidden">{children}</div>;
};
