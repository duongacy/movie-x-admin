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
                <div className="mx-auto mt-1.5" style={{ width: '150%', marginLeft: '-25%' }}>
                    <Slider {...settings} className="flex">
                        <div  className="p-1">
                            <div
                                className="aspect-w-16 aspect-h-10 rounded-xl"
                                style={{
                                    backgroundImage: "url('images/films/film-1.jpg')",
                                }}
                            >
                                <div className="flex flex-col justify-between py-1 px-2">
                                    <h6 className="text-s-text text-right font-500">1h45m</h6>
                                    <h6 className="text-s-text text-16 font-500">
                                        Sat thu ca voi
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div  className="p-1">
                            <div
                                className="aspect-w-16 aspect-h-10 rounded-xl "
                                style={{
                                    backgroundImage: "url('images/films/film-1.jpg')",
                                }}
                            >
                                <div className="flex flex-col justify-between py-1 px-2">
                                    <h6 className="text-s-text text-right font-500">1h45m</h6>
                                    <h6 className="text-s-text text-16 font-500">
                                        Sat thu ca voi
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div  className="p-1">
                            <div
                                className="aspect-w-16 aspect-h-10 rounded-xl "
                                style={{
                                    backgroundImage: "url('images/films/film-1.jpg')",
                                }}
                            >
                                <div className="flex flex-col justify-between py-1 px-2">
                                    <h6 className="text-s-text text-right font-500">1h45m</h6>
                                    <h6 className="text-s-text text-16 font-500">
                                        Sat thu ca voi
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div  className="p-1">
                            <div
                                className="aspect-w-16 aspect-h-10 rounded-xl "
                                style={{
                                    backgroundImage: "url('images/films/film-1.jpg')",
                                }}
                            >
                                <div className="flex flex-col justify-between py-1 px-2">
                                    <h6 className="text-s-text text-right font-500">1h45m</h6>
                                    <h6 className="text-s-text text-16 font-500">
                                        Sat thu ca voi
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div  className="p-1">
                            <div
                                className="aspect-w-16 aspect-h-10 rounded-xl "
                                style={{
                                    backgroundImage: "url('images/films/film-1.jpg')",
                                }}
                            >
                                <div className="flex flex-col justify-between py-1 px-2">
                                    <h6 className="text-s-text text-right font-500">1h45m</h6>
                                    <h6 className="text-s-text text-16 font-500">
                                        Sat thu ca voi
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div  className="p-1">
                            <div
                                className="aspect-w-16 aspect-h-10 rounded-xl "
                                style={{
                                    backgroundImage: "url('images/films/film-1.jpg')",
                                }}
                            >
                                <div className="flex flex-col justify-between py-1 px-2">
                                    <h6 className="text-s-text text-right font-500">1h45m</h6>
                                    <h6 className="text-s-text text-16 font-500">
                                        Sat thu ca voi
                                    </h6>
                                </div>
                            </div>
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
