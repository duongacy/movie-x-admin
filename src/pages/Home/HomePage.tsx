import React, { Fragment } from 'react';
import Trailer from './Trailer';
import FilmBlock from './FilmBlock';
import CinemaBlock from './CinemaBlock';
import AppBlock from './AppBlock';
import MainTemplate from '../../templates/MainTemplate';

const HomePage = () => {
    return (
        <MainTemplate>
            <HomePageWrapper>
                <Trailer />
                <FilmBlock />
                <CinemaBlock />
                <AppBlock />
            </HomePageWrapper>
        </MainTemplate>
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
