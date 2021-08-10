import React from 'react';
import { Carousel } from 'antd';
import Trailer from './Trailer';
import Slider from 'react-slick';

const HomePage = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <HomePageWrapper>
            <Trailer />
            <div className="px-1 phone:px-3 py-5 text-s-text film-block">
                <h6 className="text-20 font-600">Đang chiếu</h6>
                <div className="mx-auto mt-1.5" style={{width:"150%", marginLeft:"-25%"}}>
                    <Slider {...settings} className="flex">
                        <div className="px-0.5">
                            <img src="images/films/film-1.jpg" className="rounded-xl" alt="" />
                        </div>
                        <div className="px-0.5">
                            <img src="images/films/film-2.jpg" className="rounded-xl" alt="" />
                        </div>
                        <div className="px-0.5">
                            <img src="images/films/film-3.jpg" className="rounded-xl" alt="" />
                        </div>
                        <div className="px-0.5">
                            <img src="images/films/film-2.jpg" className="rounded-xl" alt="" />
                        </div>
                        <div className="px-0.5">
                            <img src="images/films/film-3.jpg" className="rounded-xl" alt="" />
                        </div>
                        <div className="px-0.5">
                            <img src="images/films/film-1.jpg" className="rounded-xl" alt="" />
                        </div>
                        <div className="px-0.5">
                            <img src="images/films/film-1.jpg" className="rounded-xl" alt="" />
                        </div>
                        <div className="px-0.5">
                            <img src="images/films/film-1.jpg" className="rounded-xl" alt="" />
                        </div>
                        <div className="px-0.5">
                            <img src="images/films/film-1.jpg" className="rounded-xl" alt="" />
                        </div>
                        <div className="px-0.5">
                            <img src="images/films/film-1.jpg" className="rounded-xl" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </HomePageWrapper>
    );
};
export default HomePage;

interface IHomePageWrapperProps {}
const HomePageWrapper: React.FC<IHomePageWrapperProps> = ({ children }) => {
    return <div className="bg-primary flex-auto overflow-hidden">{children}</div>;
};
