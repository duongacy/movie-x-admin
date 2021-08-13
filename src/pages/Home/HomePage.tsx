import React from 'react';
import Trailer from './Trailer';
import FilmBlock from './FilmBlock';
import CinemaBlock from './CinemaBlock';

const HomePage = () => {
    return (
        <HomePageWrapper>
            <Trailer />
            <FilmBlock/>
            <CinemaBlock/>
        </HomePageWrapper>
    );
};
export default HomePage;

interface IHomePageWrapperProps {}
const HomePageWrapper: React.FC<IHomePageWrapperProps> = ({ children }) => {
    return <div className="bg-primary flex-auto overflow-hidden">{children}</div>;
};
